<script lang="ts">
	import TitledSection from '../components/TitledSection.svelte';

	const quotes = [
		{
			from: 'Weatherman, Community Manager',
			text: 'The eggheads back in the lab will develope a feature that will allow me to kick you in the balls online. Real life distance does not matter. I will kick you in the balls.'
		},
		{
			from: 'jlorraine318, Player',
			text: 'Cool to see Pinecrest back in action.'
		},
		{
			from: 'bongwater, Alcoholic',
			text: 'Drop the black!! Drop the black!!'
		}
	];
</script>

<TitledSection id="testimonials" title="What our users say">
	{#each quotes as quote}
		<figure
			class="my-12 rounded-3xl border border-2 border-solid border-zinc-600/50 bg-zinc-950/10 backdrop-blur-lg backdrop-brightness-100"
		>
			<blockquote class="relative rounded-3xl py-12 pr-8 pl-14">
				<p
					class="mt-2 text-left text-2xl text-white before:absolute before:top-0 before:left-0 before:translate-x-2 before:translate-y-2 before:transform before:font-serif before:text-9xl before:text-white before:opacity-25 before:content-['\201C'] after:absolute after:right-0 after:-bottom-20 after:-translate-x-2 after:-translate-y-2 after:transform after:font-serif after:text-9xl after:text-white after:opacity-25 after:content-['\201D'] sm:text-3xl"
				>
					{quote.text}
				</p>
			</blockquote>
			<figcaption class="mt-2 mr-2 mb-2 text-right text-xl text-white italic sm:text-2xl">
				&#8212;{quote.from}
			</figcaption>
		</figure>
	{/each}
</TitledSection>
