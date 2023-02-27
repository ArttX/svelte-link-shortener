import prisma from "$lib/server/prisma/client";

import type { Actions } from "./$types";
import type { SessionWithId } from "../app";

export const actions = {
    default: async ({ request, locals }) => {
        const session = await locals.getSession() as SessionWithId | null;
        if (!session?.user) return { success: false, message: "User not logged in" };

        const data = await request.formData();
        const fullLink = data.get("full-link") as string;
        const shortLink = data.get("short-link") as string;

        const currentLink = await prisma.links.findUnique({ where: { shortLink: shortLink } });
        if (currentLink) return { success: false, message: "Link already exists" };

        const user = await prisma.user.findUnique({ where: { id: session.user.id } });
        if (!user) return { success: false, message: "User not logged in" };

        await prisma.links.create({
            data: {
                fullLink: fullLink,
                shortLink: shortLink,
                userId: user.id
            }
        });

        return { success: true, message: "Link created" };
    }
} satisfies Actions;