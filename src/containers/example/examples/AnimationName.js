/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Animation, Grid } from '@htmlplus/react';
import '@htmlplus/core/animation/names/flippers/flip-in-x.js';
import '@htmlplus/core/animation/names/flippers/flip-in-y.js';
const AnimationName = () => {
  return (
    <Grid justifyContent="evenly" gutter="md">
      <Grid.Item xs="12" sm="auto">
        <Animation iterations="Infinity" name="flip-in-x" run></Animation>
      </Grid.Item>
      <Grid.Item xs="12" sm="auto">
        <Animation iterations="Infinity" name="flip-in-y" run></Animation>
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