<script lang="ts">
	import TitledSection from '../../components/TitledSection.svelte';
	import TitledParagraph from '../../components/TitledParagraph.svelte';
	import IconButton from '../../components/IconButton.svelte';
</script>

<main class="mx-auto max-w-5xl">

	<TitledSection id="team" title="Welcome to Pinecrest 2.">
		<h2 class="mb-6 -mt-4 text-center text-2xl font-medium text-white sm:text-3xl">There's <span class="text-yellow-200">never</span> a moment in the city.</h2>

		<div class="max-w-3xl flex justify-center gap-8 mx-auto py-0 h-14 rounded-lg border-2 border-solid border-zinc-600/50 bg-zinc-950/10 backdrop-blur-lg backdrop-brightness-200">

			<IconButton link="https://discord.gg/jpXkAk4ASb" text="Discord" hide={false}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor">
					<!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
					<path d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z"/>
				</svg>
			</IconButton>


			<IconButton link="https://youtube.com/playlist?list=PLrn6mGoBrwzob5lma_0HEe515hbzbYeha&si=faS60VFyXrtFu9IH" text="Videos" hide={false}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor">
					<!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
					<path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/>
				</svg>
			</IconButton>

			<IconButton link="https://docs.google.com/document/d/1ufNPigvnNwv6Lb3hyYc3J3FDwaHXAaVx05TDnEX7G8I" text="Rules" hide={true}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
					<!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
					<path d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/>
				</svg>
			</IconButton>

			<IconButton link="https://steamcommunity.com/sharedfiles/filedetails/?id=2683657347" text="Content" hide={true}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor">
					<!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
					<path d="M256 48c0-26.5 21.5-48 48-48L592 0c26.5 0 48 21.5 48 48l0 416c0 26.5-21.5 48-48 48l-210.7 0c1.8-5 2.7-10.4 2.7-16l0-242.7c18.6-6.6 32-24.4 32-45.3l0-32c0-26.5-21.5-48-48-48l-112 0 0-80zM571.3 347.3c6.2-6.2 6.2-16.4 0-22.6l-64-64c-6.2-6.2-16.4-6.2-22.6 0l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L480 310.6 480 432c0 8.8 7.2 16 16 16s16-7.2 16-16l0-121.4 36.7 36.7c6.2 6.2 16.4 6.2 22.6 0zM0 176c0-8.8 7.2-16 16-16l352 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16L16 224c-8.8 0-16-7.2-16-16l0-32zm352 80l0 224c0 17.7-14.3 32-32 32L64 512c-17.7 0-32-14.3-32-32l0-224 320 0zM144 320c-8.8 0-16 7.2-16 16s7.2 16 16 16l96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-96 0z"/>
				</svg>
			</IconButton>
		</div>

		<TitledParagraph id="biograpgy" title="Biography">
			<p class="-mt-4 text-justify sm:text-left sm:text-xl">
				<span class="font-bold">Pinecrest 2</span> is an online RPG project that started production in early December 2024. Pinecrest and its development operate under 2 names: <span class="font-bold">Pinecrest</span> as the Half-Life Roleplaying Game, and <span class="font-bold text-gray-200">Greywater Studio</span> as the production team in charge of creating the game.
			</p>
			<p class="text-justify sm:text-left sm:text-xl">
				<span class="font-bold">Greywater Studio</span> is a development platform co-founded by Weatherman, mage.tearz, and funded in large part by Greywater. Founded for the purposes of pursuing passion for revenge, Greywater Studio caused the revival of the beloved Pinecrest project after its nearly year-long disappearance.
			</p>

			<div class="inline-flex items-center justify-center w-full -mb-3">
				<hr class="w-78 h-px my-2 border-0 rounded-sm bg-gray-400">
				<div class="absolute px-4 rounded-md -translate-x-1/2 left-1/2 bg-gray-600">
					<svg class="w-4 h-4 text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
						<path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
					</svg>
				</div>
			</div>

			<p class="italic text-gray-300 text-md text-center">Allies today. Enemies tomorrow.<br>The world is a complex place,<br>further complicated by man's fickle natures.</p>

			<div class="inline-flex items-center justify-center w-full">
				<hr class="w-78 h-px -mt-2 border-0 rounded-sm bg-gray-400">
			</div>
		</TitledParagraph>

		<TitledParagraph id="philosophy" title="Design philosophy">
			<p class="-mt-4 text-justify sm:text-left sm:text-xl">
				Pinecrest 2 is an <span class="italic">anarchy-lite</span> server. The game operates under a skeletal rule structure, so our focus is on providing a serious environment through <span class="font-bold">game mechanics</span> rather than admin intervention.
			</p>
			<p class="text-justify sm:text-left sm:text-xl">
				<span class="font-bold">Player-made groups and factions</span> have the opportunity to engage in politics and beaurocracy amongst the many lanes of city control, whilst new players have an easy-going and lenient environment to learn the gameplay.
			</p>
		</TitledParagraph>

		<TitledParagraph id="conclusion" title="Your world">
			<p class="-mt-4 text-justify sm:text-left sm:text-xl">
				Every corner hides new potential for danger and opportunity. Your choices alone can bring the entire city into collapse or prosperity.<br>
				<span class="font-bold text-yellow-200">In Pinecrest 2, you are responsible for your story.</span>
			</p>
		</TitledParagraph>

	</TitledSection>

	<a href="/#projects">
		<p
			class="mb-24 text-center text-xl font-bold text-blue-300 sm:text-center sm:text-2xl"
		>
			Return home
		</p>
	</a>
</main>
