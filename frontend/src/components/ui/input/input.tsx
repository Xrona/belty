import clsx from 'clsx'
import {ChangeEvent, FC, useRef, useState} from 'react'

import styles from './input.module.scss'

type InputViewType = 'default' | 'underline'

interface IInput {
	value: string
	onInput?: (e: ChangeEvent<HTMLInputElement>) => void
	placeholder?: string
	type?: InputViewType
}

const Input: FC<IInput> = ({value, onInput, placeholder, type = 'default'}) => {
	const [focus, setFocus] = useState(!!value)

	return (
		<fieldset className={clsx(styles.inputContainer, styles[type])}>
			<label onClick={() => setFocus(true)}>
				<span className={clsx(styles.placeholder, focus && styles.focus)}>{placeholder}</span>
				<input
					className={styles.input}
					type='text'
					value={value}
					onBlur={() => setFocus(!!value)}
					onInput={onInput}
				/>
			</label>
		</fieldset>
	)
}

export default Input
