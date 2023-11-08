/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Divider, Faker, Grid } from '@htmlplus/react';

function App() {
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
}

const DividerCustomize = () => {
  return (
    <div className="ex-divider-customize">
      <App />
      <style>{`.ex-divider-customize plus-divider {  --plus-divider-color: darkgray;  --plus-divider-width: 0.5rem;  margin: 2rem 0;}`}</style>
    </div>
  )
};

export default DividerCustomize;
