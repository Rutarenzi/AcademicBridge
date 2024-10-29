import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginImport from 'eslint-plugin-import';
import pluginJest from 'eslint-plugin-jest';
import pluginPrettier from 'eslint-plugin-prettier';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import airbnb from 'eslint-config-airbnb';

export default [
	{
		files: ['**/*.{js,mjs,cjs,jsx}'],
		plugins: {
			pluginReact: pluginReact,
			pluginJest: pluginJest,
			pluginPrettier: pluginPrettier,
			pluginReactHooks: pluginReactHooks,
			pluginImport: pluginImport,
			pluginJsxA11y: pluginJsxA11y,
			airbnb: airbnb,
		},
	},

	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.jest,
			},
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
	},
	{
		settings: {
			react: {
				version: 'detect',
			},
		},
	},
	{
		rules: {
			'no-underscore-dangle': 'off',
		},
	},
	pluginJs.configs.recommended,
	pluginReact.configs.flat.recommended,
];
