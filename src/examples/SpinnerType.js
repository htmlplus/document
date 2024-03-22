/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/spinner.js';
import '@htmlplus/ui/stack.js';

function App() {
  return (
    <plus-stack gap="2rem">
      <plus-spinner type="default"></plus-spinner>
      <plus-spinner type="double-bounce"></plus-spinner>
      <plus-spinner type="ring"></plus-spinner>
      <plus-spinner type="ripple"></plus-spinner>
      <plus-spinner type="dual-ring"></plus-spinner>
      <plus-spinner type="square"></plus-spinner>
    </plus-stack>
  );
}

const SpinnerType = () => {
  return (
    <div className="ex-spinner-type">
      <App />
    </div>
  )
};

export default SpinnerType;
