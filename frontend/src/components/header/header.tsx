'use client'

import {FC} from 'react'

import styles from './header.module.scss'

import Menu from './menu'
import Profile from './profile'

export const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Menu />
			<Profile />
		</header>
	)
}
