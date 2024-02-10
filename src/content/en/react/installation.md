# React

`HTMLPLUS` elements are not fully [compatible](https://custom-elements-everywhere.com/#react@experimental) with React library.

<br/>

<Alert type="warning">
  React is not fully compatible with [Custom Elements](https://mdn.io/using-custom-elements), check the compatibility [here](https://custom-elements-everywhere.com).
</Alert>

## Install

Install `HTMLPLUS` package into React application.

```shell
npm install @htmlplus/core
```

## Usage

Import the reference of elements.

```jsx
import '@htmlplus/core';

const App = () => <plus-switch/>;

export default App;
```

## Properties

To set properties and attributes.

### Primitive types

To use number, string, boolean, null, undefined, symbol and bigint types.

```jsx
import '@htmlplus/core';

const App = () => <plus-switch disabled/>;

export default App;
```

### Complex types

To use object and array types.

```jsx
import { useEffect, useRef } from 'react';

import '@htmlplus/core';

const App = () => {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.keyframes = [
      { offset: 0.00, opacity: '1' },
      { offset: 0.25, opacity: '0' },
      { offset: 0.50, opacity: '1' },
      { offset: 0.75, opacity: '0' },
      { offset: 1.00, opacity: '1' }
    ];
  }, []);

  return <plus-animation iterations="Infinity" ref={ref} play></plus-animation>
};

export default App;
```

## Events

To handle event's callback.

```jsx
import { useEffect, useRef } from 'react';

import '@htmlplus/core';

const App = () => {
  const ref = useRef(null);

  const callback = () => alert('The switch toggled!');

  useEffect(() => {
    ref.current.addEventListener('plus-change', callback);
    return () => ref.current.removeEventListener('plus-change', callback);
  }, []);

  return <plus-switch ref={ref}/>
}

export default App;
```
