<script lang="ts">
	import ManagementBox from '../../components/ManagementBox.svelte';
	import PersonnelBox from '../../components/PersonnelBox.svelte';
	import TitledSection from '../../components/TitledSection.svelte';

	const mgmt = [
		{
			name: 'Greywater',
			avatar: 'assets/img/people-greywater.png',
			description:
				"Facilitates the acquisition of resources necessary for the continued production and development of systems. Head executive of the studio, has a hand in almost every decision.",
			position: 'Head Executive'
		},
		{
			name: 'Weatherman',
			avatar: 'assets/img/people-weatherman.png',
			description: 'Project founder, lead writer and community manager. Responsible for documentation and inter-community organization. Listening to Maidcore.',
			position: 'Community Coordination'
		}
	];

	const platforms = [
		{
			name: 'Weatherman',
			avatar: 'assets/img/people-weatherman.png',
			position: 'Pinecord Manager'
		},
		{
			name: 'The Singularity',
			avatar: 'assets/img/people-singularity.png',
			position: 'Transcend Manager'
		},
		{
			name: 'Stez',
			avatar: 'assets/img/people-stez.png',
			position: 'Evenfall Manager'
		},
	];

	const devs = [
		{
			name: 'mage.tearz',
			position: 'Systems & UI',
			avatar: 'assets/img/people-mage.png',
			link: 'https://github.com/mage-tearz',
		},
		{
			name: 'Creeper2750',
			position: 'Systems Developer',
			avatar: 'assets/img/people-creeper.png',
			link: 'https://github.com/Creeper2750',
		},
		{
			name: 'Samael',
			position: 'Backend Developer',
			avatar: 'assets/img/people-samael.png',
			link: 'https://github.com/bleonheart',
		},
		{
			name: 'aindrigo',
			position: 'Weapons Developer',
			avatar: 'assets/img/people-adam.png',
			link: 'https://github.com/aindrigo',
		},
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
		},
		{
			name: 'bugjuice',
			avatar: 'assets/img/people-bugjuice.png'
		}
	];
</script>

<TitledSection id="team" title="Our Team">
	<div class="mx-auto mt-8 mb-8 flex grid max-w-5xl list-none grid-cols-1 items-center gap-4">
		{#each mgmt as { name, position, avatar, description }}
			<ManagementBox {name} {position} {avatar} {description} />
		{/each}
	</div>
</TitledSection>

<h2 class="text-center text-3xl mt-10 font-bold text-white sm:text-left sm:text-4xl">Platform Managers</h2>
<hr class="align-left mt-2 w-0 border-gray-500 sm:w-1/2" />
<div
	class="mx-auto mt-6 mb-12 flex grid max-w-5xl list-none grid-cols-1 items-center gap-4 sm:grid-cols-3"
>
	{#each platforms as { name, avatar, position }}
		<PersonnelBox {name} {avatar} {position} />
	{/each}
</div>


<h2 class="text-center text-3xl mt-24 font-bold text-white sm:text-left sm:text-4xl">Document Team</h2>
<hr class="align-left mt-2 w-0 border-gray-500 sm:w-1/2" />
<div
	class="mx-auto mt-6 mb-12 flex grid max-w-5xl list-none grid-cols-1 items-center gap-4 sm:grid-cols-3"
>
	{#each writers as { name, avatar }}
		<PersonnelBox {name} {avatar} />
	{/each}
</div>

<h2 class="text-center text-3xl mt-24 font-bold text-white sm:text-left sm:text-4xl">Developers</h2>
<hr class="align-left mt-2 w-0 border-gray-500 sm:w-1/2" />
<div
	class="mx-auto mt-6 mb-12 flex grid max-w-5xl list-none grid-cols-1 items-center gap-4 sm:grid-cols-3"
>
	{#each devs as { name, position, avatar, link }}
		<PersonnelBox {name} {position} {avatar} {link}/>
	{/each}
</div>