import {useState} from 'react'

import {Footer} from '@/components/layout/footer'
import {Header} from '@/components/layout/header'
import Button from '@/components/ui/button'
import {Input} from '@/components/ui/input'

const Index = () => {
	const [name, setName] = useState('')

	return (
		<div>
			{/* <Header />
			<h1>Index page</h1> */}
			<span>User name</span>
			<Input
				placeholder='test'
				value={name}
				onInput={e => setName(e.target.value)}
			/>
			{/* <Button
				color='blue60'
				handleClick={() => {}}
				icon='cart'
				name='Button'
			/>
			<Footer /> */}
		</div>
	)
}

export default Index
