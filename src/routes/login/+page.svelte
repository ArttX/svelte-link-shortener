<script>
	import { signIn } from "@auth/sveltekit/client";
</script>

<div class="mx-auto my-32 flex w-fit flex-col gap-8 rounded-lg bg-gray-800 p-8">
	<h1 class="text-center text-2xl font-bold">Login page</h1>
	<ul>
		<li>
			<button
				on:click={() => signIn("github", { callbackUrl: "/" })}
				class="rounded-lg bg-black py-2 px-3 font-bold hover:bg-gray-900 active:bg-gray-800"
			>
				Login with Github
			</button>
		</li>
	</ul>
</div>
