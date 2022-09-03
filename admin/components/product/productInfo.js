import { Autocomplete, Box, Button, Stack, TextField } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'

const ProductInfo = () => {
	const product = {
		name: 'ProductName',
		price: 500.4,
		article: 'product article',
		sizes: [
			{
				name: '40',
				value: 1,
			},
			{
				name: '45',
				value: 2,
			},
		],
	}
	return (
		<Box>
			<Stack spacing={3} flexGrow='1'>
				<TextField
					size='small'
					variant='filled'
					disabled={true}
					value={product.name}
				></TextField>
				<TextField
					label='Цена'
					size='small'
					variant='filled'
					disabled={true}
					value={product.price}
				/>
				<TextField
					label='Артикул'
					size='small'
					variant='filled'
					disabled={true}
					value={product.article}
				/>
				<Autocomplete
					multiple
					id='tags-outlined'
					options={product.sizes}
					getOptionLabel={(option) => option.name}
					filterSelectedOptions
					renderInput={(params) => (
						<TextField {...params} label='Размеры' />
					)}
				/>
				<Box height='900px'></Box>
			</Stack>
		</Box>
	)
}

export default ProductInfo
