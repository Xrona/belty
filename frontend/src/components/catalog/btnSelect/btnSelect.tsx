import {ChangeEvent, FC} from 'react'

import styles from './btnSelect.module.scss'

interface iItem {
	label: string
	value: string
}

type Props = {
	items: Array<iItem>
	list: Array<string>
	onChange: (value: string[]) => void
}

export const BtnSelect: FC<Props> = ({items, onChange, list}) => {
	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		if (!event.target.checked) {
			onChange(list.filter(value => value !== event.target.value))

			return
		}

		onChange([...list, event.target.value])
	}

	return (
		<div className={styles.container}>
			{items.map(item => (
				<label
					key={item.label}
					className={styles.item}
				>
					<input
						checked={list.includes(item.value)}
						className={styles.input}
						type='checkbox'
						value={item.value}
						onChange={onChangeHandler}
					/>
					<span className={styles.title}>{item.label}</span>
				</label>
			))}
		</div>
	)
}
