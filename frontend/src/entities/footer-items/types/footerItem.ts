export interface IFooterItem{
	title?: string
	children: IFooterItemChildren[]
}

interface IFooterItemChildren{
	name: string
	link?: string
}
