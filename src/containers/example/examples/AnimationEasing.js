/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Animation, Grid } from '@htmlplus/react';
const AnimationEasing = () => {
  return (
    <Grid justifyContent="evenly" gutter="md">
      <Grid.Item xs="12" sm="auto">
        <Animation
          easing="ease-in"
          iterations="Infinity"
          name="fade-in"
          run
        ></Animation>
      </Grid.Item>
      <Grid.Item xs="12" sm="auto">
        <Animation
          easing="ease-out"
          iterations="Infinity"
          name="fade-in"
          run
        ></Animation>
      </Grid.Item>
    </Grid>
  );
};

const AnimationEasingExample = () => {
  return (
    <div className="ex-animation-easing">
      <AnimationEasing />
      <style>{`.ex-animation-easing plus-animation {  background: lightgray;  width: 100px;  height: 100px;  margin: auto;}`}</style>
    </div>
  )
};

export default AnimationEasingExample;