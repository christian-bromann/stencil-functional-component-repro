import { sass } from '@stencil/sass';
import type { Config } from '@stencil/core';

export const config: Config = {
	outputTargets: [
		{
			type: 'www',
			serviceWorker: false
		}
	],
	globalStyle: './src/global/_global.scss',
	plugins: [
		sass({
			includePaths: [
				'./src/'
			],
			injectGlobalPaths: [
				'./src/global/_injected.scss'
			]
		})
	]
};
