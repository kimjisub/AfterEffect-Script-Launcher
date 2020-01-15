module.exports = {
	env: {
		commonjs: true,
		es6: true,
		node: true,
	},
	extends: 'eslint:recommended',
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaVersion: 2018,
	},
	extends: ['prettier'],
	plugins: ['prettier'],
	rules: {
		'prettier/prettier': ['error'],
	},
	rules: {
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'never'],
		'no-console': 'off',
		'no-unused-vars': 'off',
		'no-empty': ['error', { allowEmptyCatch: true }],
		'no-fallthrough': 'off',
	},
}
