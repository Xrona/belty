'use client'

import clsx from 'clsx'
import Link from 'next/link'
import {FC, useState} from 'react'

import styles from './menu.module.scss'

import {menuItemType, menuList} from './menuList'

export const Menu: FC = () => {
	const menuRenderList = (menuItem: menuItemType) => {
		if (menuItem.children) {
			return (
				<li
					key={menuItem.name}
					className={styles.subMenu}
				>
					<span className={clsx(styles.link, 'body-text single')}>
						{menuItem.name}
						<span className={'icon-arrow'}></span>
					</span>
					<ul className={styles.content}>
						{menuItem.children.map(menuRenderList)}
					</ul>
				</li>
			)
		}

		return (
			<li key={menuItem.name}>
				<Link
					className={clsx(styles.link, 'body-text single')}
					href={menuItem?.href ?? '/'}
				>
					{menuItem.name}
				</Link>
			</li>
		)
	}

	const [show, setShow] = useState(false)

	return (
		<nav className={styles.navigationContainer}>
			<button
				className={clsx(styles.burger, show && styles.active)}
				onClick={() => setShow(!show)}
			>
				<span></span>
				<span></span>
				<span></span>
			</button>
			<Link
				className={clsx(styles.logo, 'title-xl')}
				href='/'
			>
				Belty.
			</Link>
			<ul className={styles.navigation}>
				{menuList.map(menuRenderList)}
			</ul>
		</nav>
	)
}
