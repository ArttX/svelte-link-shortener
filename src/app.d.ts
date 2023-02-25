// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import type { Session, DefaultUser } from "@auth/core/types";

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

type DefaultSessionUser = DefaultUser & { id: string };
interface SessionWithId extends Session {
	user: DefaultSessionUser
}

export { SessionWithId };
