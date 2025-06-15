<script lang="ts">
	export let id: string;
	export let title: string;
</script>

<section id={id}>
    <div class="mx-auto mt-12 sm:mt-24 mb-20 grid max-w-3xl list-none grid-cols-1 items-center gap-4">
        <p class="text-2xl font-bold text-gray-300 font-mono">{title}</p>
        <hr class="w-1/2 h-px -mt-6 border-0 bg-gray-300 border-gray-300">
        <slot />

    </div>
</section>