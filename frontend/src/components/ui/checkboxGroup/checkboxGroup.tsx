import {ChangeEvent, FC} from 'react'

import Checkbox from '../checkbox'

interface ICheckbox {
	label: string
	value: string
}

type TypeProps = {
	items: ICheckbox[]
	list: string[]
	onChange: (list: string[]) => void
	className?: string
}

export const CheckboxGroup: FC<TypeProps> = ({
	items,
	list,
	onChange,
	className = '',
}) => {
	const onCheckHandler = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value

		if (list.includes(value)) {
			onChange(list.filter(listValue => listValue !== value))

			return
		}

		onChange([...list, value])
	}

	return (
		<ul className={className}>
			{items.map(({label, value}) => (
				<li key={label}>
					<Checkbox
						checked={list.includes(value)}
						title={label}
						value={value}
						onCheck={onCheckHandler}
					/>
				</li>
			))}
		</ul>
	)
}
