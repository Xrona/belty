import '../styles/globals.css'
import { Container, ThemeProvider } from '@mui/material'
import Header from '../components/common/header'
import { darkTheme, lightTheme } from '../config/theme'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={darkTheme}>
			<Head>
				<link
					rel='stylesheet'
					href='https://fonts.googleapis.com/icon?family=Material+Icons'
				/>
				<title>t</title>
			</Head>
			<Header />
			<Container className='wrapper'>
				<Component {...pageProps} />
			</Container>
		</ThemeProvider>
	)
}

export default MyApp
