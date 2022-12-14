/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Grid, Spinner } from '@htmlplus/react';
const SpinnerType = () => {
  return (
    <Grid justifyContent="evenly">
      <Grid.Item>
        <Spinner size="md" type="default"></Spinner>
      </Grid.Item>
      <Grid.Item>
        <Spinner size="md" type="double-bounce"></Spinner>
      </Grid.Item>
      <Grid.Item>
        <Spinner size="md" type="ring"></Spinner>
      </Grid.Item>
      <Grid.Item>
        <Spinner size="md" type="ripple"></Spinner>
      </Grid.Item>
      <Grid.Item>
        <Spinner size="md" type="dual-ring"></Spinner>
      </Grid.Item>
      <Grid.Item>
        <Spinner size="md" type="square"></Spinner>
      </Grid.Item>
    </Grid>
  );
};

const SpinnerTypeExample = () => {
  return (
    <div className="ex-spinner-type">
      <SpinnerType />
    </div>
  )
};

export default SpinnerTypeExample;
