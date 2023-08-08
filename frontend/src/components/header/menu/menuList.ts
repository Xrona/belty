export type menuItemType = {
	name: string
	href?: string
	children?: menuItemType[]
}

export const menuList: menuItemType[] = [
	{
		name: 'Home',
		href: '/',
	},
	{
		name: 'Categories',
		children: [
			{
				name: 'Nike',
				href: '/products?query="nike"',
			},
			{
				name: 'Armani',
				href: '/products?query="armani"',
			},
			{
				name: 'Veryy loooong name',
				href: '/products',
			},
		],
	},
	{
		name: 'Sales',
		href: '/sales',
	},
	{
		name: 'About',
		href: '/about',
	},
	{
		name: 'Blog',
		href: '/blog',
	},
	{
		name: 'Contacts',
		href: '/contacts',
	},
]
