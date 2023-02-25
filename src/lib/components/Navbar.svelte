<script lang="ts">
	import { page } from "$app/stores";
	import { signOut } from "@auth/sveltekit/client";

	const session = $page.data.session;
</script>

<nav class="flex h-12 w-full items-center justify-between bg-gray-800">
	<span class="ml-4 flex h-full flex-col justify-center text-xl font-bold">
		<a href="/">Svelte Link</a>
	</span>
	{#if session && session.user}
		<div class="mr-auto ml-10 flex h-full items-center">
			<a href="/links" class="hover:text-orange-600">Links</a>
		</div>
		<div class="flex h-full items-center gap-4">
			<div class="flex h-full items-center gap-3">
				<span class="font-bold">{session.user.name}</span>
				<img src={session.user.image} alt="avatar" class="h-8 w-8 rounded-full" />
			</div>
			<button
				on:click={() => signOut({ callbackUrl: "/" })}
				class="mr-4 h-8 w-20 rounded-lg bg-orange-600 py-0.5 px-2 font-bold hover:bg-orange-700 active:bg-orange-800"
			>
				Logout
			</button>
		</div>
	{:else}
		<a
			href="/login"
			class="mr-4 flex h-8 w-20 items-center justify-center rounded-lg bg-orange-600 py-0.5 px-2 font-bold hover:bg-orange-700 active:bg-orange-800"
		>
			Login
		</a>
	{/if}
</nav>
