<script lang="ts">
	export let image: string;
	export let name: string;
	export let description: string;
</script>

<li
	class="flex w-2/3 flex-col items-center rounded-3xl border border-2 border-solid border-zinc-600/50 bg-zinc-950/10 px-2 py-6 shadow-xl backdrop-blur-lg backdrop-brightness-100 sm:w-5/6"
>
	<img src={image} alt={name} class="mb-6 w-1/2" />
	<h3 class="text-center text-3xl text-white">{name}</h3>
	<p class="mt-2 hidden text-center text-2xl text-slate-400 sm:block">
		{description}
	</p>

	<p class="mt-2 text-center text-2xl text-slate-400 sm:block sm:hidden">
		{description}
	</p>
</li>
