import SwipeableViews from 'react-swipeable-views'
import { Box, Button, IconButton, MobileStepper, Paper } from '@mui/material'
import {
	Edit,
	KeyboardArrowLeft,
	KeyboardArrowRight,
} from '@mui/icons-material'
import { useState } from 'react'

const images = [
	{
		imgPath:
			'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
	},
	{
		imgPath:
			'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
	},
	{
		imgPath:
			'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
	},
	{
		imgPath:
			'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
	},
]

const ProductSlider = () => {
	const [index, setIndex] = useState(0)
	const steps = images.length

	const handleChangeIndex = (index) => {
		setIndex(index)
	}

	const handleBack = () => {
		setIndex(() => index - 1)
	}

	const handleNext = () => {
		setIndex(() => index + 1)
	}

	return (
		<Box position='relative'>
			<Paper
				sx={{
					position: 'absolute',
					zIndex: 2,
					top: '5px',
					right: '5px',
				}}
			>
				<IconButton color='primary'>
					<Edit />
				</IconButton>
			</Paper>
			<SwipeableViews
				enableMouseEvents
				index={index}
				onChangeIndex={handleChangeIndex}
			>
				{images.map((item) => (
					<div key={item.imgPath}>
						<Box
							component='img'
							sx={{
								display: 'block',
								overflow: 'hidden',
								width: '100%',
								borderRadius: '5px',
							}}
							src={item.imgPath}
						/>
					</div>
				))}
			</SwipeableViews>
			<MobileStepper
				variant='progress'
				sx={{
					paddingLeft: 0,
					paddingRight: 0,
				}}
				activeStep={index}
				position='static'
				steps={steps}
				backButton={
					<Button
						size='small'
						disabled={index === 0}
						onClick={handleBack}
					>
						<KeyboardArrowLeft />
					</Button>
				}
				nextButton={
					<Button
						size='small'
						disabled={index === steps - 1}
						onClick={handleNext}
					>
						<KeyboardArrowRight />
					</Button>
				}
			/>
		</Box>
	)
}

export default ProductSlider
