import {NextPage} from 'next'
import {AppProps} from 'next/app'

import '@/app/styles/global.scss'

import Header from '@/widgets/header'
import {Sidebar} from '@/widgets/sidebar/ui/SideBar'

import Layout from '@/shared/ui/layout'

type AppPropsWithLayout = AppProps & {
	Component: NextPage
}

const App = ({Component, pageProps}: AppPropsWithLayout) => {
	return (
		<Layout>
			<Header />
			<Sidebar />
			<Component {...pageProps} />
		</Layout>
	)
}

export default App
