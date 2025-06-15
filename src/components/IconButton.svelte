<script lang="ts">
	export let link: string;
	export let text: string;
	export let hide: boolean;

    let button_class = "cursor-pointer rounded-md bg-none my-auto px-6 py-3 text-base font-medium text-gray-200 shadow-lg transition duration-150 ease-in-out hover:shadow-xl focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"

    if (hide) {
        button_class = "sm:flex hidden " + button_class
    } else {
        button_class = "flex " + button_class
    }

</script>

<a
    href={link}
    class={button_class}
    target="_blank">
    <span class="me-2 [&>svg]:h-6 [&>svg]:w-6">

    <slot />

    </span>
    <span class="cursor-pointer">{text}</span>
</a>
