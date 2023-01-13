# Global Config In React (experimental)

Sets a config for the `size` property of the `spinner` component.

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';

// Setup the global config.
import { setConfig } from '@htmlplus/core/config.js';
setConfig({
  component: {
    'plus-spinner': {
      property: {
        size: 'lg',
      }
    }
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```
