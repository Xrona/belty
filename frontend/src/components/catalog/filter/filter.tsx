'use client'

import clsx from 'clsx'
import {FC, useState} from 'react'

import styles from './filter.module.scss'

import BtnSelect from '@/components/catalog/btnSelect'
import Accordion from '@/components/ui/accordion'
import CheckboxGroup from '@/components/ui/checkboxGroup'
import Slider from '@/components/ui/slider'

interface iFilter {
	categoryList: Array<string>
	max: number
	min: number
	values: [number, number]
	sizes: Array<string>
}

const items = [
	{
		label: 'Nike',
		value: 'nike',
	},
	{
		label: 'Adidas',
		value: 'adidas',
	},
]

const sizes = [
	{
		label: '43',
		value: '43',
	},
	{
		label: 'xl',
		value: 'xl',
	},
	{
		label: '44',
		value: '44',
	},
	{
		label: 'xxl',
		value: 'xxl',
	},
	{
		label: '45',
		value: '45',
	},
	{
		label: '46',
		value: '46',
	},
	{
		label: '47',
		value: '47',
	},
	{
		label: '48',
		value: '48',
	},
	{
		label: '49',
		value: '49',
	},
	{
		label: '50',
		value: '50',
	},
]

export const Filter: FC = () => {
	const [filter, setFilter] = useState<iFilter>({
		categoryList: [],
		max: 19000,
		min: 100,
		values: [100, 19000],
		sizes: [],
	})

	const onChangeCategoryHandler = (value: string[]) => {
		setFilter(prev => ({
			...prev,
			categoryList: value,
		}))
	}

	const onChangeSliderHandler = (value: [number, number] | number) => {
		setFilter(prev => ({
			...prev,
			values: value as [number, number],
		}))
	}

	const onChangeSizesHandler = (sizes: string[]) => {
		setFilter(prev => ({
			...prev,
			sizes,
		}))
	}

	return (
		<div className={styles.container}>
			<Accordion label='Categories'>
				<CheckboxGroup
					items={items}
					list={filter.categoryList}
					onChange={onChangeCategoryHandler}
				/>
			</Accordion>
			<Accordion
				className={styles.filters}
				label='Filters'
			>
				<>
					<div className={styles.slider}>
						<h3 className={clsx(styles.label, 'body-text single')}>
							Price Range
						</h3>
						<Slider
							max={filter.max}
							min={filter.min}
							values={filter.values}
							onChange={onChangeSliderHandler}
						/>
					</div>
					<div className={styles.sizes}>
						<h3 className={styles.label}>Sizes</h3>
						<BtnSelect
							items={sizes}
							list={filter.sizes}
							onChange={onChangeSizesHandler}
						/>
					</div>
				</>
			</Accordion>
		</div>
	)
}
