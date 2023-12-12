import type { Config } from '@stencil/core';

export const config: Config = {
	outputTargets: [
		{
			type: 'www',
			serviceWorker: false
		}
	]
};
