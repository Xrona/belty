import {FC, ReactNode} from 'react'
import {CartIcon} from '@/shared/ui/icons'
import styles from './button.module.scss'
import { IconType } from '@/shared/assets/types/iconType'
import clsx from 'clsx'

export interface IButton{
	name: string
	color: string
	disabled?: boolean
	icon?: IconType
	handleClick: ()=>void
}

const icons = {
	cart: <CartIcon/>
}
export const Button: FC <IButton> = ({name,handleClick,icon=null,color='',disabled=false})=>{
	const text: string | ReactNode = icon ? icons[icon] : name

	return <button className={clsx(styles.btn, icon ? styles.icon : null, styles[color])} disabled={disabled} onClick={handleClick}>{text}</button>
}
