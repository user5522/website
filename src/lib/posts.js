const posts = import.meta.glob('/src/routes/collections/*/*.svx');

const parsedPosts = await Promise.all(
	Object.entries(posts).map(async ([path, post]) => {
		const { metadata } = await post();
		const slug = path.split('/collections/').pop().replace('+page.svx', '');
		return {
			path,
			title: metadata.title,
			date: metadata.date,
			description: metadata.description,
			imgURL: metadata.imgURL,
			imgAlt: metadata.imgAlt,
			pinned: metadata.pinned || false,
			number: metadata.number,
			slug // add slug property
		};
	})
);

const sortedPosts = parsedPosts.sort((a, b) => {
	if (a.pinned && !b.pinned) {
		return -1;
	} else if (!a.pinned && b.pinned) {
		return 1;
	} else if (a.number < !b.number) {
		return -1;
	} else if (a.number > !b.number) {
		return 1;
	} else {
		return 0;
	}
});

export const allPosts = parsedPosts;
