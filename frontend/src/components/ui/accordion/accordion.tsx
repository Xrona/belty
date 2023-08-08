'use client'

import clsx from 'clsx'
import {FC, PropsWithChildren, useState} from 'react'

import styles from './accordion.module.scss'

type TypeProps = {
	label: string
	className?: string
}

export const Accordion: FC<PropsWithChildren<TypeProps>> = ({
	children,
	label,
	className = '',
}) => {
	const [view, setView] = useState(false)

	const switchHandler = () => setView(view => !view)

	return (
		<div>
			<button
				className={clsx(
					view && styles.show,
					'headline-24 regular',
					styles.btn,
				)}
				onClick={switchHandler}
			>
				{label}
				<span className='icon-arrow'></span>
			</button>
			<div className={styles.list}>
				<div className={clsx(styles.container, className)}>
					{children}
				</div>
			</div>
		</div>
	)
}
