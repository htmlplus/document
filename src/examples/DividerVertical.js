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

const DividerVertical = () => {
  return (
    <div className="ex-divider-vertical">
      <App />
    </div>
  )
};

export default DividerVertical;
