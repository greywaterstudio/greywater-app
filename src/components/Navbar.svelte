<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		const button = document.getElementById('hambubger-button');
		const menu = document.getElementById('mobile-menu');

		const toggleMenu = () => {
			menu.classList.toggle('hidden');
			menu.classList.toggle('flex');
		};

		button.addEventListener('click', toggleMenu);
		menu.addEventListener('click', toggleMenu);
	});
</script>

<header class="sticky top-0 z-10 bg-none text-white backdrop-blur-lg">
	<section class="mx-auto flex max-w-5xl items-center justify-between p-4">
		<a href="/">
			<img src="assets/img/logo.png" class="w-3xs cursor-pointer" alt="Greywater Studio" />
		</a>

		<div>
			<button
				id="hambubger-button"
				class="relative h-8 w-8 cursor-pointer text-3xl focus:outline-none md:hidden"
			>
				<div
					class="absolute top-4 -mt-0.5 h-1 w-8 rounded bg-white
					before:absolute
					before:h-1
					before:w-8
					before:-translate-x-4
					before:-translate-y-3
					before:rounded
					before:bg-white
					before:content-['']
					
					after:absolute
					after:h-1
					after:w-8
					after:-translate-x-4
					after:translate-y-3
					after:rounded
					after:bg-white
					after:content-['']"
				></div>
				<!-- &#9776 -->
			</button>
			<nav class="slide-class hidden space-x-8 text-xl md:block" aria-label="main">
				<a href="/team" class="hover:opacity-80">Team</a>
				<a href="#footer" class="hover:opacity-80">Legal</a>
			</nav>
		</div>
	</section>
	<section
		id="mobile-menu"
		class="justify-content-center animate-slide-class absolute top-68 hidden w-full origin-top flex-col bg-black text-5xl"
	>
		<!-- <button class="cursor-pointer self-end px-6 text-8xl">&times;</button> -->
		<nav class="flex min-h-screen flex-col items-center py-8" aria-label="mobile">
			<a href="/" class="w-full py-6 text-center hover:opacity-90">Home</a>
			<a href="/team" class="w-full py-6 text-center hover:opacity-90">Team</a>
			<a href="#footer" class="w-full py-6 text-center hover:opacity-90">Legal</a>
		</nav>
	</section>
</header>

<style>
	.slide-class {
		animation: 0.5s ease-in-out forwards;
	}

	@keyframes slide-class {
		0% {
			transform: scaleY(0);
		}
		100% {
			transform: scaleY(1);
		}
	}
</style>
