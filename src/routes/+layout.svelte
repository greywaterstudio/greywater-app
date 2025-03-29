<script lang="ts">
	import '../app.css';
	let { children } = $props();

	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Mona+Sans:ital,wght@0,200..900;1,200..900&display=swap"
		rel="stylesheet"
	/>

	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://greywaterstud.io/" />
	<meta property="og:title" content="greywaterstudio" />
	<meta
		property="og:description"
		content="We're still making games. As a team of highly-dedicated and passionate writers, artists, and coders, we're working to bring you amazing games."
	/>
	<meta property="og:image" content="https://greywaterstud.io/assets/img/greywater-hollow.png" />
	<title>Greywater Studio</title>
</svelte:head>

<div
	class="overflow-x-hidden bg-[linear-gradient(to_right_bottom,rgba(59,61,124,0.171),rgba(32,55,103,0.144)),url('../../../assets/img/background.png')] bg-cover bg-fixed text-white"
>
	<Navbar />

	{@render children()}

	<Footer />
</div>
