import { Button, Grid } from '@mui/material'
import ProductSearch from '../../components/products/productSearch'
import ProductCard from '../../components/products/productCard'

export default function Products() {
	const list = [1, 2, 3, 4, 5, 7, 8, 9, 0, 9, 9, 9]

	return (
		<>
			<Grid container columns={12} spacing={3}>
				<Grid item xs={12}>
					<ProductSearch />
				</Grid>
				{list.map((i, index) => {
					return (
						<Grid item xs={12} sm={4} md={3} key={index}>
							<ProductCard />
						</Grid>
					)
				})}
			</Grid>
		</>
	)
}
