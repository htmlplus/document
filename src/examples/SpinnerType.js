/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Spinner, Stack } from '@htmlplus/react';

function App() {
  return (
    <Stack gap="2rem">
      <Spinner type="default"></Spinner>
      <Spinner type="double-bounce"></Spinner>
      <Spinner type="ring"></Spinner>
      <Spinner type="ripple"></Spinner>
      <Spinner type="dual-ring"></Spinner>
      <Spinner type="square"></Spinner>
    </Stack>
  );
}

const SpinnerTypeExample = () => {
  return (
    <div className="ex-spinner-type">
      <App />
    </div>
  )
};

export default SpinnerTypeExample;
