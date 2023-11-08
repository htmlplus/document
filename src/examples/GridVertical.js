/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Grid } from '@htmlplus/react';

function App() {
  return (
    <Grid alignItems="center" vertical>
      <Grid.Item xs="3">
        <div>Item</div>
      </Grid.Item>
      <Grid.Item xs="grow">
        <div>Item</div>
      </Grid.Item>
      <Grid.Item xs="3">
        <div>Item</div>
      </Grid.Item>
    </Grid>
  );
}

const GridVertical = () => {
  return (
    <div className="ex-grid-vertical">
      <App />
      <style>{`.ex-grid-vertical plus-grid {  height: 12rem;}.ex-grid-vertical plus-grid div {  color: #00bcd4;  border: 1px solid #ffffff;  background-color: #e0f7fa;  height: 100%;  padding: 0.5em;  text-align: center;}`}</style>
    </div>
  )
};

export default GridVertical;
