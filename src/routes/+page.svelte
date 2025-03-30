<script>
	import Hero from './Hero.svelte';
	import Projects from './Projects.svelte';
	import Testimonials from './Testimonials.svelte';
	import Video from './Video.svelte';

	const heroSection = {
		subtitle: "We're a team of highly-dedicated and passionate writers, artists, and coders",
		highlight: 'working to bring you amazing games.',
		image: 'assets/img/greywater-hollow.png'
	};
</script>

<svelte:head>
	<title>Greywater Studio - Home</title>
</svelte:head>

<main class="mx-auto max-w-5xl">
	<Hero
		subtitle={heroSection.subtitle}
		highlight={heroSection.highlight}
		image={heroSection.image}
	/>
	<hr class="mx-auto w-1/2 bg-black" />

	<Video source="https://csafe.locki.cloud/0FkkEDJm.mov" />
	<hr class="mx-auto w-1/2 bg-black" />

	<Projects />
	<hr class="mx-auto w-1/2 bg-black" />

	<Testimonials />
</main>

<style>
</style>
