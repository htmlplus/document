# React (experimental)

`HTMLPLUS` elements are fully [compatible](https://custom-elements-everywhere.com/#react@experimental) with React library.

## Install

Install `HTMLPLUS` package into React application.

```shell
npm install @htmlplus/ui
```

## Usage

Import the reference of elements.

```jsx
import '@htmlplus/ui';

const App = () => <plus-switch/>;

export default App;
```

## Properties

To set properties and attributes.

```jsx
import '@htmlplus/ui';

const App = () => <plus-switch disabled/>;

export default App;
```

## Events

To handle event's callback.

```jsx
import '@htmlplus/ui';

const App = () => <plus-switch onplus-Change={() => alert('The switch toggled!')} />;

export default App;
```
