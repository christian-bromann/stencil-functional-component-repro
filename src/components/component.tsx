import { Component } from '@stencil/core';
import type { ComponentInterface } from '@stencil/core';

@Component({
	tag: 'my-component'
})
export class MyComponent implements ComponentInterface {}
