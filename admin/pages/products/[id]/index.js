import { Box, Button, Stack, MobileStepper, Paper } from '@mui/material'
import ProductSlider from '../../../components/product/productSlider'
import ProductInfo from '../../../components/product/productInfo'
import EditIcon from '@mui/icons-material/Edit'
import Actions from '../../../components/common/actions'

const ProductPage = () => {
	return (
		<Stack direction='row' spacing={3} alignItems='start'>
			<Box width='60%'>
				<ProductSlider />
				<ProductInfo />
			</Box>
			<Actions />
		</Stack>
	)
}

export default ProductPage
