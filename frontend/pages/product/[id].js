import { useRouter } from 'next/router'

const Product = () => {
	const { id } = useRouter().query

	return <div>Is product {id}</div>
}

export default Product
