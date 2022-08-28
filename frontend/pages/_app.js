import '../styles/globals.css'
import { ThemeProvider } from '@mui/material'

import { theme } from '../config/theme'
import Header from '../components/common/header/header'

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={theme}>
			<Component {...pageProps} />
			<Header />
		</ThemeProvider>
	)
}

export default MyApp
