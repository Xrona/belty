import {FC} from 'react'

import {MenuBurger, useChangeStatus} from '@/features/menu-burger'

import {MenuList} from '@/entities/menu-list'

export const Header: FC = () => {
	const {status, changeStatusHandler} = useChangeStatus()
	return (
		<header>
			{/*logo, cart*/}
			<MenuBurger handler={changeStatusHandler} />
			<MenuList status={status} />
			{/*profile*/}
		</header>
	)
}
