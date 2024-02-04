# Global Config

Defines the properties of elements as global. For instance `placement` property of the `dialog` element has a `top` value as default. By global config can apply a value like `center` to all `dialog` elements. Consider this config can be overridden by setting the value to each element.

## Signature

A simple template for defining a collection of configs.

```js
import { setConfig } from '@htmlplus/core/config.js';

setConfig({
  element: {
    'ELEMENT-A': {
      property: {
        'PROPERTY-1': 'VALUE'
      }
    },
    'ELEMENT-B': {
      property: {
        'PROPERTY-1': 'VALUE',
        'PROPERTY-2': 'VALUE'
      }
    }
  }
});
```

## Example

A real example of a definition.

```js
import { setConfig } from '@htmlplus/core/config.js';

setConfig({
  element: {
    'plus-spinner': {
      property: {
        size: 'lg',
      }
    }
  }
});
```
