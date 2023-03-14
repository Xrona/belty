export interface IFooterItem{
	title?: string
	children: IFooterItemChildren[]
}

type ItemType = 'icon'| 'link' | 'text'

interface IFooterItemChildren{
	name: string
	link?: string
	view: ItemType
}
