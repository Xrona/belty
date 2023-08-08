'use client'

import {FC} from 'react'

import styles from './profile.module.scss'

import Button from '@/components/ui/button'

export const Profile: FC = () => {
	return (
		<div className={styles.profile}>
			<Button
				isStroke
				size='sm'
			>
				sign in
			</Button>
			<Button size='sm'>sign up</Button>
		</div>
	)
}
