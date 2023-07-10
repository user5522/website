<script>
	import { tippy } from 'svelte-tippy';

	export let isPinned = false;
	export let href;
	export let title;
	export let description;
	export let imgURL;
	export let imgAlt;
	export let postDate;

	let id = title.replace(' ', '-').toLowerCase();
</script>

<a
	{href}
	{id}
	class="max-w-xl text-white select-none rounded-xl bg-dark dark:text-white hover-anim"
>
	<div>
		<div class="flex justify-center sm:h-2/3">
			<div class="relative">
				<img src={imgURL} alt={imgAlt} class="rounded-t-xl" loading="lazy" />
				<img
					use:tippy={{
						content: 'This post is pinned.',
						arrow: false,
						animation: 'shift-away',
						interactive: true,
						theme: 'dark',
						placement: 'left',
						duration: 0,
						offset: [0, 5]
					}}
					src="/icons/pin.svg"
					alt="Pinned"
					class="p-1 rounded-full bg-dark w-7 sm:w-9 {isPinned
						? 'absolute'
						: 'hidden'} top-2 right-2"
					loading="lazy"
				/>
			</div>
		</div>
		<div class="flex flex-col gap-2 p-5 sm:h-1/3">
			<span>
				<div class="text-xl font-bold">
					{title}
				</div>
				<div class="text-md opacity-60">
					Date: {postDate}
				</div>
			</span>
			<div class="text-lg">
				{description}
			</div>
		</div>
	</div>
</a>
