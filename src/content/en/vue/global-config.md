# Global Config In Vue

Sets a config for the `size` property of the `spinner` element.

```js
import { createApp } from 'vue';
import App from './App.vue';

// Setup the global config.
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

createApp(App).mount('#app');
```
