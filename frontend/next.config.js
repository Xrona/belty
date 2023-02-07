/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		fontLoaders: [{loader: '@next/font/google', options: {subsets: ['latin', 'cyrillic']}}],
	},
	sassOptions: {
		includePaths: [path.join(__dirname, 'src/app/styles')],
		prependData: '@import "global.scss";',
	},
}

module.exports = nextConfig
