import clsx from 'clsx'
import {ChangeEvent, FC} from 'react'

import styles from './checkbox.module.scss'

type TypeProps = {
	title: string
	value: string
	checked: boolean
	onCheck: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Checkbox: FC<TypeProps> = ({title, value, checked, onCheck}) => {
	return (
		<label className={styles.checkbox}>
			<input
				checked={checked}
				className={styles.input}
				type='checkbox'
				value={value}
				onChange={onCheck}
			/>
			<span className={styles.icon}></span>
			<span className={clsx('body-text single')}>{title}</span>
		</label>
	)
}
