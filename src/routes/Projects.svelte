<script lang="ts">
	import TitledSection from '../components/TitledSection.svelte';
	import ProjectBox from '../components/ProjectBox.svelte';

	const projects = [
		{
			name: 'Outlands-RP',
			desc: 'Wilderness survival game',
			image: 'assets/img/logo-outlandsrp.png'
		},
		{
			name: 'Pinecrest 1',
			desc: 'Online Half-Life 2 role-playing game',
			image: 'assets/img/logo-pinecrest.png'
		},
		{
			name: 'Evenfall KTB',
			desc: 'Combine Overwatch campaign',
			image: 'assets/img/logo-evenfall.png'
		},
	];
</script>

<TitledSection title="Our Projects">
	<ul class="mx-auto my-12 flex max-w-4xl list-none flex-col items-center gap-8 sm:flex-row">
		{#each projects as project}
			<ProjectBox image={project.image} name={project.name} description={project.desc} />
		{/each}
	</ul>
</TitledSection>
