import { Autocomplete, TextField } from '@mui/material'

const ProductSearch = () => {
	const list = [
		{ label: 'The Shawshank Redemption', year: 1994 },
		{ label: 'The Godfather', year: 1972 },
		{ label: 'The Godfather: Part II', year: 1974 },
		{ label: 'The Dark Knight', year: 2008 },
		{ label: '12 Angry Men', year: 1957 },
		{ label: "Schindler's List", year: 1993 },
		{ label: 'Pulp Fiction', year: 1994 },
	]

	return (
		<Autocomplete
			renderInput={(params) => (
				<TextField {...params} label='Поиск по названию товара' />
			)}
			options={list}
		/>
	)
}

export default ProductSearch
