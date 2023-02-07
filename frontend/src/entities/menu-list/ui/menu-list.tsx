import clsx from 'clsx'
import {FC} from 'react'

import {linkArray} from '@/entities/menu-list/const/link-array'

import {CLink} from '@/shared/ui/link'

import styles from './menu-list.module.scss'

type TProps = {
	status: boolean
}

export const MenuList: FC<TProps> = ({status}) => {
	return (
		<nav
			className={clsx(styles.menuList, {
				[styles.active]: status,
			})}
		>
			<ul>
				{linkArray.map(link => (
					<li key={link.href}>
						<CLink {...link} />
					</li>
				))}
			</ul>
		</nav>
	)
}
