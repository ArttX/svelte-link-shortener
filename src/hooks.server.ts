import { SvelteKitAuth } from "@auth/sveltekit";
import GitHubProvider from "@auth/core/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "$lib/server/prisma/client";
import { GITHUB_ID, GITHUB_SECRET } from "$env/static/private";

import type { SessionWithId } from "./app";

export const handle = SvelteKitAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        GitHubProvider({
            clientId: GITHUB_ID,
            clientSecret: GITHUB_SECRET
        })
    ],
    callbacks: {
        session: async ({ session, user }) => {
            (<SessionWithId>session).user.id = user.id;
            return session;
        }
    }
})