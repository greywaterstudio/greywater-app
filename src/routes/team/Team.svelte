<script lang="ts">
	import ManagementBox from '../../components/ManagementBox.svelte';
	import PersonnelBox from '../../components/PersonnelBox.svelte';
	import TitledSection from '../../components/TitledSection.svelte';

	const mgmt = [
		{
			name: 'Greywater',
			avatar: 'assets/img/people-greywater.png',
			description:
				'Facilitates the acquisition of resources necessary for the production and development of systems.',
			position: 'Head Executive'
		},
		{
			name: 'Weatherman',
			avatar: 'assets/img/people-weatherman.png',
			description: 'Project founder, lead writer and community manager.',
			position: 'Community Coordination'
		}
	];

	const devs = [
		{
			name: 'mage.tearz',
			position: 'Systems Developer',
			avatar: 'assets/img/people-mage.png'
		},
		{
			name: 'Samael',
			position: 'Back-end Developer',
			avatar: 'assets/img/people-samael.png'
		},
		{
			name: 'aindrigo',
			position: 'Weapons Developer',
			avatar: 'assets/img/people-adam.png'
		}
	];

	const writers = [
		{
			name: 'Weatherman',
			avatar: 'assets/img/people-weatherman.png'
		},
		{
			name: 'The Singularity',
			avatar: 'assets/img/people-singularity.png'
		},
		{
			name: 'Ross',
			avatar: 'assets/img/people-ross.png'
		}
	];
</script>

<TitledSection id="team" title="Managed By">
	<div class="mx-auto mt-8 mb-8 flex grid max-w-5xl list-none grid-cols-1 items-center gap-4">
		{#each mgmt as { name, position, avatar, description }}
			<ManagementBox {name} {position} {avatar} {description} />
		{/each}
	</div>
</TitledSection>

<hr class="mx-auto w-1/2 bg-black" />

<TitledSection id="team" title="The Team">
	<h2 class="text-center text-3xl font-bold text-white sm:text-left sm:text-4xl">Writers</h2>
	<hr class="align-left mt-2 w-0 border-gray-500 sm:w-1/2" />
	<div
		class="mx-auto mt-6 mb-12 flex grid max-w-5xl list-none grid-cols-1 items-center gap-4 sm:grid-cols-3"
	>
		{#each writers as { name, position, avatar, gradient }}
			<PersonnelBox {name} {position} {avatar} />
		{/each}
	</div>

	<h2 class="text-center text-3xl font-bold text-white sm:text-left sm:text-4xl">Developers</h2>
	<hr class="align-left mt-2 w-0 border-gray-500 sm:w-1/2" />
	<div
		class="mx-auto mt-6 mb-12 flex grid max-w-5xl list-none grid-cols-1 items-center gap-4 sm:grid-cols-3"
	>
		{#each devs as { name, position, avatar, gradient }}
			<PersonnelBox {name} {position} {avatar} />
		{/each}
	</div>
</TitledSection>
