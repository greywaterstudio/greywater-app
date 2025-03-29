<script lang="ts">
	import TitledSection from '../components/TitledSection.svelte';
	import ProjectBox from '../components/ProjectBox.svelte';

	const projects = [
		{
			name: 'Pinecrest',
			desc: 'Online Half-Life 2 role-playing game',
			image: 'assets/img/logo-pinecrest.png'
		},
		{ name: 'Evenfall', desc: 'Outlands Survival Gamemode', image: 'assets/img/logo-evenfall.png' },
		{ name: 'e5', desc: 'No-boilerplate RP framework', image: 'assets/img/logo-e5.png' }
	];
</script>

<TitledSection title="Our Projects">
	<ul class="mx-auto my-12 flex max-w-4xl list-none flex-col items-center gap-8 sm:flex-row">
		{#each projects as project}
			<ProjectBox image={project.image} name={project.name} description={project.desc} />
		{/each}
	</ul>
</TitledSection>
