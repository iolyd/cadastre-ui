type Route = {
	title: string;
	href: `/${string}`;
	// routes?: Route[];
};

export const routes: Route[] = [
	{
		title: 'Home',
		href: '/',
	},
	{
		title: 'Actions',
		href: '/actions',
	},
	{
		title: 'Components',
		href: '/components',
	},
	{
		title: 'Styles',
		href: '/styles',
	},
	{
		title: 'Transitions',
		href: '/transitions',
	},
];
