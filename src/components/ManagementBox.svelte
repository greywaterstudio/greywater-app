<script lang="ts">
	export let name: string;
	export let avatar: string;
	export let position: string;
	export let description: string;
</script>

<div
	class="w-1xl max-w mx-auto flex flex-row rounded-4xl border-2 border-solid border-zinc-600/50 bg-zinc-950/10 px-4 py-4 shadow-xl backdrop-blur-lg backdrop-brightness-100 sm:w-full sm:flex-row"
>
	<img
		src={avatar}
		alt={name}
		class="sm:block hidden max-w-1/5 place-self-center rounded-4xl border-2 border-solid border-zinc-600/50"
	/>

	<div class="mt-4 ml-4 w-full">
		<div class="flex flex-row">
			<h3 class="mr-4 text-left text-3xl font-bold tracking-wide text-white">{name}</h3>
			<div
				class="sm:block hidden content-center rounded-full border-2 border-solid border-zinc-600/50 bg-zinc-500/50 px-2"
			>
				<p class="text-1xl font-medium text-white">{position}</p>
			</div>
		</div>

		<p class="mt-2 block text-left text-2xl text-slate-400">
			{description}
		</p>
	</div>
</div>
