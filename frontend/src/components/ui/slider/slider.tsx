'use client'

import clsx from 'clsx'
import React, {FC, useEffect, useRef, useState} from 'react'

import styles from './slider.module.scss'

type SliderValue = number | [number, number]

type SliderProps = {
	min: number
	max: number
	values: SliderValue

	onChange: (value: SliderValue) => void
}

const enum InputNameEnum {
	FROM = 'from',
	TO = 'to',
}

interface iInput {
	value: number
	percentValue: number
	name: InputNameEnum
}

interface iLine {
	left: number
	width: number
}

export const Slider: FC<SliderProps> = ({min, max, values, onChange}) => {
	const calculatePercent = (value: number, width: number) => {
		const thumbWidth = 15 / (300 / 100)

		const percent = Math.floor((value * 100) / width) - thumbWidth

		if (percent < 0) {
			return 0
		}

		return percent
	}
	const onSetLineStyleHandler = () => {
		const {left, width} = fillLine()
		const [from, last] = sortSlidersByName()

		if (Array.isArray(values)) {
			onChange([from.value, last.value])
		} else {
			onChange(from.value)
		}

		setLineStyle({
			left,
			width,
		})
	}
	const sortSlidersByValue = () => {
		return [firstInput, lastInput].sort((a, b) => a.value - b.value)
	}
	const fillLine = (): iLine => {
		const [from, to] = sortSlidersByValue()

		let left = 0
		let width = firstInput.percentValue

		if (Array.isArray(values)) {
			left = from.percentValue + 1
			width = to.percentValue - from.percentValue
		}

		return {left, width}
	}

	const [firstInput, setFirstInput] = useState<iInput>({
		value: Array.isArray(values) ? values[0] : values,
		percentValue: calculatePercent(
			Array.isArray(values) ? values[0] : values,
			max,
		),
		name: InputNameEnum.FROM,
	})

	const [lastInput, setLastInput] = useState<iInput>({
		value: Array.isArray(values) ? values[1] : values,
		percentValue: calculatePercent(
			Array.isArray(values) ? values[1] : values,
			max,
		),
		name: InputNameEnum.TO,
	})

	const [isDragging, setIsDragging] = useState(false)
	const [currentName, setCurrentName] = useState(InputNameEnum.FROM)
	const [lineStyle, setLineStyle] = useState<iLine>(fillLine())

	const sliderRef = useRef<HTMLDivElement | null>(null)
	const firstThumbRef = useRef<HTMLSpanElement | null>(null)
	const lastThumbRef = useRef<HTMLSpanElement | null>(null)
	const sliderGroupRef = useRef<HTMLDivElement | null>(null)
	const lineRef = useRef<HTMLSpanElement | null>(null)

	const initDragging = (event: PointerEvent) => {
		if (!isDragging) {
			return
		}

		const [value, percentValue] = calculateDragging(event)
		dragging(value, percentValue)
	}

	const calculateDragging = (event: PointerEvent) => {
		const obj = sliderGroupRef.current?.getBoundingClientRect()
		const width = obj!.width
		let position = event.clientX - obj!.left

		position = Math.max(0, Math.min(position, width))

		const value = (position * max) / width
		const percentValue = calculatePercent(position, width)

		return [value, percentValue]
	}

	const dragging = (value: number, percentValue: number, name = '') => {
		if (name ? name === firstInput.name : currentName === firstInput.name) {
			setFirstInput(prev => ({
				...prev,
				value: Math.floor(value > max ? max : value),
				percentValue: percentValue,
			}))
		}

		if (name ? name === lastInput.name : currentName === lastInput.name) {
			setLastInput(prev => ({
				...prev,
				value: Math.floor(value > max ? max : value),
				percentValue: percentValue,
			}))
		}
	}

	const toggleInputs = () => {
		if (!Array.isArray(values)) {
			return
		}
		const [from, to] = sortSlidersByName()
		const stateDispatchers = [setFirstInput, setLastInput]

		if (from.value > to.value) {
			stateDispatchers.forEach(fn => {
				fn(prev => ({
					...prev,
					name:
						prev.name === InputNameEnum.FROM
							? InputNameEnum.TO
							: InputNameEnum.FROM,
				}))
			})
		}
	}

	const sortSlidersByName = (): iInput[] => {
		return [firstInput, lastInput].sort((a, b) =>
			a.name.localeCompare(b.name),
		)
	}

	const stopDrag = () => {
		toggleInputs()
		setIsDragging(false)
		setTransition('remove')
	}

	const pointerDown = (event: PointerEvent) => {
		const width = sliderGroupRef.current?.getBoundingClientRect().width ?? 0
		const position = Math.min(event.clientX, width)

		const firstThumbPos =
			firstThumbRef.current?.getBoundingClientRect()?.left ?? 0
		const lastThumbPos =
			lastThumbRef.current?.getBoundingClientRect()?.left ?? 0

		const firstDifference = Math.abs(position - firstThumbPos)
		const lastDifference = Math.abs(position - lastThumbPos)

		let name = 'from'

		if (Array.isArray(values)) {
			if (firstDifference < lastDifference) {
				name =
					firstThumbRef.current?.getAttribute('data-name') ?? 'from'
			}
			if (lastDifference < firstDifference) {
				name = lastThumbRef.current?.getAttribute('data-name') ?? 'to'
			}
		}

		const [value, percentValue] = calculateDragging(event)

		dragging(value, percentValue, name)
	}

	const setTransition = (property: 'add' | 'remove') => {
		firstThumbRef.current?.classList[property](styles.noneTransition)
		lastThumbRef.current?.classList[property](styles.noneTransition)
		lineRef.current?.classList[property](styles.noneTransition)
	}

	const onThumbDownHandler = (name: InputNameEnum) => {
		setTransition('add')
		setIsDragging(true)
		setCurrentName(name)
	}

	useEffect(() => {
		document.addEventListener('pointermove', initDragging)
		document.addEventListener('pointerup', stopDrag)

		if (sliderRef.current) {
			sliderRef.current?.addEventListener('pointerdown', pointerDown)
		}

		if (lineRef.current) {
			lineRef.current?.addEventListener('pointerdown', pointerDown)
		}

		return () => {
			document.removeEventListener('pointerup', stopDrag)
			document.removeEventListener('pointermove', initDragging)

			if (sliderRef.current) {
				sliderRef.current?.removeEventListener(
					'pointerdown',
					pointerDown,
				)
			}

			if (lineRef.current) {
				lineRef.current?.removeEventListener('pointerdown', pointerDown)
			}
		}
	}, [isDragging, firstInput, lastInput, currentName])

	useEffect(() => {
		onSetLineStyleHandler()
	}, [firstInput, lastInput])

	return (
		<div
			ref={sliderGroupRef}
			className={styles.group}
		>
			<div
				ref={sliderRef}
				className={styles.slider}
			>
				<span className={styles.back} />
				<span
					ref={lineRef}
					className={styles.line}
					style={{
						width: `${lineStyle.width}%`,
						left: `${lineStyle.left}%`,
					}}
				/>
				<span
					ref={firstThumbRef}
					className={clsx(styles.thumb, styles.first)}
					data-name={firstInput.name}
					style={{
						left: `${firstInput.percentValue}%`,
					}}
					onPointerDown={() => onThumbDownHandler(firstInput.name)}
				>
					<input
						className={styles.input}
						max={max}
						min={min}
						name={firstInput.name}
						type='range'
						value={firstInput.value}
						onChange={() => {}}
					/>
				</span>
				{Array.isArray(values) && (
					<span
						ref={lastThumbRef}
						className={clsx(styles.thumb, styles.last)}
						data-name={lastInput.name}
						style={{
							left: `${lastInput.percentValue}%`,
						}}
						onPointerDown={() => onThumbDownHandler(lastInput.name)}
					>
						<input
							className={styles.input}
							max={max}
							min={min}
							name={lastInput.name}
							type='range'
							value={lastInput.value}
							onChange={() => {}}
						/>
					</span>
				)}
			</div>
			<div className={styles.options}>
				<span className={styles.option}>{min}</span>
				<span className={styles.option}>{max}</span>
			</div>
		</div>
	)
}
