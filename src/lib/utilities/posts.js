const posts = import.meta.glob('/src/routes/collections/*/*.mdx');

const parsedPosts = await Promise.all(
	Object.entries(posts).map(async ([path, post]) => {
		const { metadata } = await post();
		const slug = path.split('/collections/').pop().replace('+page.mdx', '');
		return {
			path,
			title: metadata.title,
			date: metadata.date,
			description: metadata.description,
			imgURL: metadata.imgURL,
			imgAlt: metadata.imgAlt,
			pinned: metadata.pinned || false,
			number: metadata.number,
			slug
		};
	})
);

const sortPosts = (clicked) => {
	return [...parsedPosts].sort((a, b) => {
		if (a.pinned && !b.pinned) {
			return -1;
		} else if (!a.pinned && b.pinned) {
			return 1;
		} else if (clicked) {
			return a.number - b.number;
		} else {
			return b.number - a.number;
		}
	});
};

export { parsedPosts, sortPosts };
