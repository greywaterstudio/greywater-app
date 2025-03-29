<script lang="ts">
	export let source: string;
</script>

<section id="projects" class="my-12 scroll-mt-20 p-6">
	<h2 class="mb-8 text-center text-4xl font-bold text-white sm:text-5xl">What we're working on</h2>
	<div class="flex flex-col sm:flex-row">
		<video
			controls
			autoplay
			muted
			loop
			id="backgroundVideo"
			class="mr-6 w-1/2 w-full rounded-3xl border border-2 border-solid border-zinc-600/50 sm:w-1/2"
		>
			<source src={source} type="video/mp4" />
		</video>

		<div class="flex flex-col">
			<h2
				class="mt-4 mb-4 text-center text-3xl font-semibold tracking-wider text-gray-100 sm:text-left sm:text-4xl"
			>
				Pinecrest 2
			</h2>
			<p class="mb-4 text-center text-xl text-gray-200 sm:text-left sm:text-2xl">
				Our online Half-Life role-playing game. Immersive atmosphere, swamped bureaucracy, and
				brutal combat. There's never a moment in the city.
			</p>
			<a href="https://discord.com/invite/sqd5D9mBpW" target="_blank">
				<p
					class="mb-6 text-center text-xl font-bold text-blue-300 underline sm:text-left sm:text-2xl"
				>
					Join the Discord.
				</p>
			</a>
		</div>
	</div>
</section>
