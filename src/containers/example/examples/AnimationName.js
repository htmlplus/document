/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Animation, Grid } from '@htmlplus/react';
const AnimationName = () => {
  return (
    <Grid justifyContent="evenly" gutter="md">
      <Grid.Item xs="12" sm="auto">
        <Animation iterations="Infinity" name="fade-in" run></Animation>
      </Grid.Item>
      <Grid.Item xs="12" sm="auto">
        <Animation iterations="Infinity" name="fade-out" run></Animation>
      </Grid.Item>
    </Grid>
  );
};

const AnimationNameExample = () => {
  return (
    <div className="ex-animation-name">
      <AnimationName />
      <style>{`.ex-animation-name plus-animation {  background: lightgray;  width: 100px;  height: 100px;  margin: auto;}`}</style>
    </div>
  )
};

export default AnimationNameExample;