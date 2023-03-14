import {Jura} from '@next/font/google'
import clsx from 'clsx'
import {NextPage} from 'next'
import {AppProps} from 'next/app'

import '@/app/styles/reset.scss'

type AppPropsWithLayout = AppProps & {
	Component: NextPage
}

const juraFont = Jura({
	variable: '--jura-font',
})

const App = ({Component, pageProps}: AppPropsWithLayout) => {
	return (
		<div className={clsx(juraFont.variable, 'container')}>
			<Component {...pageProps} />
		</div>
	)
}

export default App
