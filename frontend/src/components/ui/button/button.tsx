import clsx from 'clsx'
import {FC, PropsWithChildren} from 'react'

import styles from './button.module.scss'

type TypeProps = {
	size?: 'md' | 'lg' | 'sm'
	isStroke?: boolean
	color?: 'blue' | 'dark-blue' | 'ocean' | 'error' | 'success' | 'warning'
	disabled?: boolean
}

export const Button: FC<PropsWithChildren<TypeProps>> = ({
	size = 'md',
	children,
	isStroke = false,
	color = 'blue',
	disabled = false,
}) => {
	return (
		<button
			disabled={disabled}
			className={clsx(
				styles.btn,
				styles[size],
				styles[color],
				isStroke ? styles.outline : styles.fill,
			)}
		>
			{children}
		</button>
	)
}
