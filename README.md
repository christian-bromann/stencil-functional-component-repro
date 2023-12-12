```sh
npm ci
# ...
npm run build
# ... ok
npm run build
# ...
[ ERROR ]  TypeScript: node_modules/@stencil/core/internal/stencil-private.d.ts:2:53
           Cannot find module 'child_process' or its corresponding type declarations.

      L1:  import { result } from './utils';
      L2:  import type { Serializable as CPSerializable } from 'child_process';
```

Happens when `lib` or `typeRoots` are set in `tsconfig.json`
