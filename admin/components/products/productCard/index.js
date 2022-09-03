import {
	Button,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	FormControlLabel,
	Switch,
} from '@mui/material'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/delete'

const productCard = () => {
	return (
		<Card
			sx={{
				position: 'relative',
			}}
		>
			<IconButton
				color='error'
				sx={{
					position: 'absolute',
					top: '5px',
					right: '5px',
				}}
			>
				<DeleteIcon color='disabled' />
			</IconButton>
			<CardMedia
				height='200'
				component='img'
				alt='product image'
				image='https://images.unsplash.com/photo-1636572465767-1e0a977da3fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
			></CardMedia>
			<CardContent>
				<Typography variant='h5' component='h3' marginBottom={2}>
					Product name
				</Typography>
				<Typography variant='body2' gutterBottom component='p'>
					цена: 380 р
				</Typography>
				<Typography variant='body2' marginBottom={2} component='p'>
					aртикул: тест
				</Typography>
				<FormControlLabel
					control={<Switch />}
					label='Отображать в списке'
				/>
			</CardContent>
			<CardActions>
				<Button fullWidth={true} variant='outlined'>
					Подробнее
				</Button>
			</CardActions>
		</Card>
	)
}

export default productCard
