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
	plugins: [mixedPlugin],
	tabWidth: 4,
	useTabs: true,
	singleQuote: true,
	printWidth: 120,
	arrowParens: 'avoid',
	semi: false,
	jsxSingleQuote: true,
	bracketSpacing: false,
	singleAttributePerLine: true,
	importOrder: [
		'<THIRD_PARTY_MODULES>',
		'@/app/(.*)$',
		'@/widgets/(.*)$',
		'@/features/(.*)$',
		'@/entities(.*)$',
		'@/shared/(.*)$',
		'^../(.*)$',
		'^./(.*)$',
		'(.scss)$',
	],
	importOrderSeparation: true,
	importOrderSortSpecifiers: true,
}
