/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Animation, Grid } from '@htmlplus/react';
const AnimationCustomEasing = () => {
  return (
    <Grid justifyContent="evenly" gutter="md">
      <Grid.Item xs="12" sm="auto">
        <Animation
          easing="cubic-bezier(0.165, 0.84, 0.44, 0.5)"
          iterations="Infinity"
          name="fade-in"
          run
        ></Animation>
      </Grid.Item>
      <Grid.Item xs="12" sm="auto">
        <Animation
          easing="cubic-bezier(0.165, 0.84, 0.44, 1)"
          iterations="Infinity"
          name="fade-in"
          run
        ></Animation>
      </Grid.Item>
    </Grid>
  );
};

const AnimationCustomEasingExample = () => {
  return (
    <div className="ex-animation-custom-easing">
      <AnimationCustomEasing />
      <style>{`.ex-animation-custom-easing plus-animation {  background: lightgray;  width: 100px;  height: 100px;  margin: auto;}`}</style>
    </div>
  )
};

export default AnimationCustomEasingExample;