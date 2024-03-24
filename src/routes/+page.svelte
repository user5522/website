<script>
	import { projects } from '$lib/projects';
	import { socials } from '$lib/socials';
</script>

<h1>i'm User5522</h1>
<p>
	i make things that i think are cool, and often times i get inspired from other projects or
	sometimes from everyday life.
</p>
<p>some of my projects include:</p>
<ul>
	{#each projects as project}
		<li><a href={project.link} target="_blank">{project.name}</a>: {project.description}</li>
	{/each}
</ul>
<p>
	interested in what i do? check out my <a href="https://github.com/user5522" target="_blank"
		>GitHub</a
	>.
</p>

<h2>Social</h2>
<p>i'm usually not very active anywhere but whatever</p>
<ul>
	{#each socials as social}
		<li><a href={social.link} target="_blank">{social.name}</a>: {social.activity}</li>
	{/each}
</ul>
