# Global Config In React (experimental)

Sets a config for the `size` property of the `spinner` element.

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';

// Setup the global config.
import { setConfig } from '@htmlplus/ui/config.js';
setConfig({
  element: {
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
