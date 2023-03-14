import {Header} from '@/widgets/header/ui/header'
import Button from '@/shared/ui/button'
import { Footer } from '@/widgets/footer/ui/footer'

const Index = () => {
	return (
		<div>
			<Header />
			<h1>Index page</h1>
			<Button color='blue60' handleClick={()=>{}} icon='cart' name='Button'/>
			<Footer/>
		</div>
	)
}

export default Index
