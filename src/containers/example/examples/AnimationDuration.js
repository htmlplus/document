/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Animation } from '@htmlplus/react';
const AnimationDuration = () => {
  return (
    <Animation
      duration="2500"
      iterations="Infinity"
      name="fade-in"
      run
    ></Animation>
  );
};

const AnimationDurationExample = () => {
  return (
    <div className="ex-animation-duration">
      <AnimationDuration />
      <style>{`.ex-animation-duration plus-animation {  background: lightgray;  width: 100px;  height: 100px;  margin: auto;}`}</style>
    </div>
  )
};

export default AnimationDurationExample;