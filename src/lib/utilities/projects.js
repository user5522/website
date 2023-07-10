const projects = [
	{
		title: 'Graphic Designs',
		description:
			"A collection of banners and logos that I created mostly for CRBT's old profiles feature and some for other projects.",
		imgURL: '/banners/banners.png',
		imgAlt: 'banners',
		href: '/projects/designs',
		number: '1'
	},
	{
		title: 'SquareGame',
		description:
			'A 2D game built with Unity, about a.. square character that navigates through.. levels.',
		imgURL: '/banners/SquareGame.png',
		imgAlt: 'SquareGame banner',
		href: '/sgsource',
		number: '2'
	},
	{
		title: 'Vbot',
		description:
			'A hobby project Discord bot that I cannot stop rewriting and not commiting my changes',
		imgURL: '/banners/Vbot.png',
		imgAlt: 'Vbot banner',
		href: '/projects/vbot',
		number: '3'
	},
	{
		title: 'Snak',
		description:
			'A snake game clone with a touch of bugs, made using Rust and the Bevy game engine.',
		imgURL: '/banners/Snak.png',
		imgAlt: 'Snak game banner',
		href: '/snaksource',
		number: '4'
	},
	{
		title: 'u3d',
		description:
			'An attempt to learn Unity 3D, you are a capsule moving around and can glitch through walls (100% intended)',
		imgURL: '/placeholder.png',
		imgAlt: 'u3d banner',
		href: '/u3d',
		number: '5'
	}
];

const sortProjects = (clicked) => {
	return [...projects].sort((a, b) => {
		if (clicked) {
			return a.number - b.number;
		} else {
			return b.number - a.number;
		}
	});
};

export { projects, sortProjects };
