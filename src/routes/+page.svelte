<script>
	import { projects } from '$lib/projects';
	import { socials } from '$lib/socials';
</script>

<h1>i'm User5522</h1>
<p>
	i make cool, usually useful stuff that solves my problems, often inspired by other projects or
	just stuff that doesn't exist yet / doesn't work the way i want it to.
</p>
<p>some of my projects include:</p>
<ul>
	{#each projects as project}
		<li><a href={project.link} target="_blank">{project.name}</a>: {project.description}</li>
	{/each}
</ul>
<p>
	if you are interested in what i do, check out my <a
		href="https://github.com/user5522"
		target="_blank">GitHub</a
	>.
</p>

<h2>Social</h2>
<p>i'm not active everywhere but do always feel free to reach out</p>
<ul>
	{#each socials as social}
		<li><a href={social.link} target="_blank">{social.name}</a>: {social.activity}</li>
	{/each}
</ul>
