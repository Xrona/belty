import type {Metadata} from 'next'
import {Roboto} from 'next/font/google'

import '@/shared/style/global.scss'

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

const roboto = Roboto({
	weight: ['100', '300', '400', '500', '700', '900'],
	subsets: ['cyrillic'],
})

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang='en'>
			<body className={roboto.className}>{children}</body>
		</html>
	)
}
