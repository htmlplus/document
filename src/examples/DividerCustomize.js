/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Divider, Faker, Grid } from '@htmlplus/react';
const DividerCustomize = () => {
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

const DividerCustomizeExample = () => {
  return (
    <div className="ex-divider-customize">
      <DividerCustomize />
      <style>{`.ex-divider-customize plus-divider {  --plus-divider-color: darkgray;  --plus-divider-width: 0.5rem;  margin: 2rem 0;}`}</style>
    </div>
  )
};

export default DividerCustomizeExample;
