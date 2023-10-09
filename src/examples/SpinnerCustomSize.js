/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Spinner, Stack } from '@htmlplus/react';

function App() {
  return (
    <Stack gap="2rem">
      <Spinner size="sm"></Spinner>
      <Spinner size="md"></Spinner>
      <Spinner size="lg"></Spinner>
    </Stack>
  );
}

const SpinnerCustomSizeExample = () => {
  return (
    <div className="ex-spinner-custom-size">
      <App />
      <style>{`.ex-spinner-custom-size plus-spinner[size='sm'] {  width: 24px;  height: 24px;}.ex-spinner-custom-size plus-spinner[size='md'] {  width: 48px;  height: 48px;}.ex-spinner-custom-size plus-spinner[size='lg'] {  width: 72px;  height: 72px;}`}</style>
    </div>
  )
};

export default SpinnerCustomSizeExample;
