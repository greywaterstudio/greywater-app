<script lang="ts">
	export let name: string;
	export let avatar: string;
	export let position: string;
	export let link: string;

	const baseClass =
		'w-1xl mx-auto flex flex-col rounded-3xl border border-2 border-solid border-zinc-600/50 px-2 py-6 shadow-xl backdrop-blur-lg backdrop-brightness-100 sm:w-full sm:flex-col';
	let newClass = baseClass;

	newClass = newClass + ' bg-zinc-950/10';
</script>

<div class={newClass}>
	<img
		src={avatar}
		alt={name}
		class="mb-6 w-1/2 place-self-center rounded-full border border-2 border-solid border-zinc-600/50"
	/>

	<a href={link} class="text-center text-3xl text-white">{name}</a>
	<p class="mt-2 hidden text-center text-2xl text-slate-400 sm:block">
		{position}
	</p>

	<p class="mt-2 text-center text-2xl text-slate-400 sm:block sm:hidden">
		{position}
	</p>
</div>
