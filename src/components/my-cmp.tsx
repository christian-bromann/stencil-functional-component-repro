import { Component, h } from '@stencil/core';
import { Icons, SvgHelp } from '.';
import SvgHelpDirectImport from './help';

@Component({
    tag: 'my-cmp',
    styles: `svg { height: 24px; }`,
})
export class MyComponent {
    render() {
        const IconSVG = Icons['help'];
        console.log(IconSVG, SvgHelpDirectImport);
        
        return (
            <div>
                <IconSVG />
                {/* <SvgHelp.default /> */}
                {/* <SvgHelpDirectImport /> */}
            </div>
        );
    }
}
