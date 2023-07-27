const pluginSortImports = require('@trivago/prettier-plugin-sort-imports')

const bothParser = {
	...pluginSortImports.parsers.typescript,
}

const mixedPlugin = {
	parsers: {
		typescript: bothParser,
	},
}

module.exports = {
	plugins: [mixedPlugin, '@trivago/prettier-plugin-sort-imports'],
	tabWidth: 4,
	useTabs: true,
	singleQuote: true,
	arrowParens: 'avoid',
	semi: false,
	tabWidth: 4,
	useTabs: true,
	singleQuote: true,
	printWidth: 80,
	arrowParens: 'always',
	jsxSingleQuote: true,
	bracketSpacing: false,
	singleAttributePerLine: true,
	importOrder: ['<THIRD_PARTY_MODULES>', '(.scss)$', '^../(.*)', '^./(.*)', '^@/assets/(.*)$', '^@/public/(.*)$'],
	importOrderSeparation: true,
	importOrderSortSpecifiers: true,
}
