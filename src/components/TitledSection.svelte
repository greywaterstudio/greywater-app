<script lang="ts">
	export let id: string;
	export let title: string;
</script>

<section {id} class="mt-10 scroll-mt-20 p-6">
	<h2 class="mb-6 text-center text-4xl font-bold text-white sm:text-5xl">
		{title}
	</h2>

	<slot />
</section>
