<script>
	import { tippy } from 'svelte-tippy';

	export let href;
	export let title;
	export let description;
	export let imgURL;
	export let imgAlt;
	export let postDate;

	export let isPinned = false;
</script>

<a {href} class="rounded-xl bg-dark text-white dark:text-white hover-anim">
	<div>
		<div class="h-full w-full">
			<div id="post_img" class="flex justify-center sm:h-2/3">
				<div class="relative">
					<img src={imgURL} alt={imgAlt} class="rounded-t-xl object-cover" />
					<button
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
						class="{isPinned ? 'absolute' : 'hidden'} top-2 right-2 rounded-full"
					>
						<img src="/icons/pin.svg" alt="Pin Icon" class="bg-dark p-1 w-7 sm:w-9 rounded-full" />
					</button>
				</div>
			</div>
			<div class="p-5 sm:h-1/3">
				<div id="post_title" class="flex w-full flex-col items-baseline gap-1 py-2 2xl:flex-row">
					<div class="text-xl font-semibold 2xl:flex 2xl:w-4/6 2xl:justify-start">
						{title}
					</div>
					<div class="text-md opacity-60 2xl:flex 2xl:w-3/6 2xl:justify-end">
						Date: {postDate}
					</div>
				</div>
				<div id="post_description" class="text-lg">
					{description}
				</div>
			</div>
		</div>
	</div>
</a>
