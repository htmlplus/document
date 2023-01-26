/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Divider, Faker, Grid } from '@htmlplus/react';
const DividerVertical = () => {
  return (
    <Grid alignItems="center" justifyContent="evenly">
      <Grid.Item xs="5">
        <Faker></Faker>
      </Grid.Item>
      <Divider vertical></Divider>
      <Grid.Item xs="5">
        <Faker></Faker>
      </Grid.Item>
    </Grid>
  );
};

const DividerVerticalExample = () => {
  return (
    <div className="ex-divider-vertical">
      <DividerVertical />
    </div>
  )
};

export default DividerVerticalExample;
