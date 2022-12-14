/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Animation, Grid } from '@htmlplus/react';
import '@htmlplus/core/animation/names/fading-exits/fade-out-down.js';
const AnimationEasing = () => {
  return (
    <>
      <Grid justifyContent="evenly" gutter="md">
        <Grid.Item xs="12" sm="auto">
          <Animation
            easing="linear"
            iterations="Infinity"
            name="fade-out-down"
            run
          ></Animation>
        </Grid.Item>
        <Grid.Item xs="12" sm="auto">
          <Animation
            easing="ease-in"
            iterations="Infinity"
            name="fade-out-down"
            run
          ></Animation>
        </Grid.Item>
        <Grid.Item xs="12" sm="auto">
          <Animation
            easing="cubic-bezier(0.25, 0.50, 0.25, 0.50)"
            iterations="Infinity"
            name="fade-out-down"
            run
          ></Animation>
        </Grid.Item>
      </Grid>
      <br />
      <br />
      <br />
    </>
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
