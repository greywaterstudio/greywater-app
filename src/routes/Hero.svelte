<script lang="ts">
	export let subtitle: string;
	export let highlight: string;
	export let image: string;
</script>

<section
	id="hero"
	class="mb-30 flex min-h-2/3 scroll-mt-40 flex-col-reverse items-center justify-center gap-8 p-6 sm:flex-row"
>
	<article class="sm:w-1/2">
		<h2 class="max-w-md text-center text-4xl font-bold text-white sm:text-left sm:text-5xl">
			All developers.
		</h2>
		<p class="mt-4 max-w-md text-center text-2xl text-slate-400 sm:text-left">
			{subtitle}
			<span class="text-indigo-300">{highlight}</span>
		</p>
	</article>
	<img class="rotation-class w-1/2" src={image} alt="Greywater Logo" />
</section>

<style>
	.rotation-class {
		animation: rotate-animation 8s ease-in-out;
		animation-iteration-count: infinite;
	}

	@keyframes rotate-animation {
		0% {
			transform: rotate(0deg);
		}
		33% {
			transform: rotate(120deg);
		}
		66% {
			transform: rotate(240deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
