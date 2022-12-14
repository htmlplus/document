/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Grid, Spinner } from '@htmlplus/react';
const SpinnerCustomSize = () => {
  return (
    <Grid alignItems="center" justifyContent="evenly">
      <Grid.Item>
        <Spinner size="sm"></Spinner>
      </Grid.Item>
      <Grid.Item>
        <Spinner size="md"></Spinner>
      </Grid.Item>
      <Grid.Item>
        <Spinner size="lg"></Spinner>
      </Grid.Item>
    </Grid>
  );
};

const SpinnerCustomSizeExample = () => {
  return (
    <div className="ex-spinner-custom-size">
      <SpinnerCustomSize />
      <style>{`.ex-spinner-custom-size plus-spinner[size='sm'] {  width: 24px;  height: 24px;}.ex-spinner-custom-size plus-spinner[size='md'] {  width: 48px;  height: 48px;}.ex-spinner-custom-size plus-spinner[size='lg'] {  width: 72px;  height: 72px;}`}</style>
    </div>
  )
};

export default SpinnerCustomSizeExample;
