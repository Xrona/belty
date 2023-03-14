import clsx from 'clsx'
import {FC, ReactNode} from 'react'

import {IconType} from '@/app/types/iconType'

import {CartIcon} from '@/components/ui/icons'

import styles from './button.module.scss'

export interface IButton {
	name: string
	color: string
	disabled?: boolean
	icon?: IconType
	handleClick: () => void
}

const icons = {
	cart: <CartIcon />,
}
export const Button: FC<IButton> = ({name, handleClick, icon = null, color = '', disabled = false}) => {
	const text: string | ReactNode = icon ? icons[icon] : name

	return (
		<button
			className={clsx(styles.btn, icon ? styles.icon : null, styles[color])}
			disabled={disabled}
			onClick={handleClick}
		>
			{text}
		</button>
	)
}
