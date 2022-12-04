/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Animation, Center } from '@htmlplus/react';
import '@htmlplus/core/animation/names/attention-seekers/tada.js';
const AnimationButton = () => {
  return (
    <Center>
      <Animation id="animation1" name="tada">
        <button onClick={() => (window.animation1.run = true)}>Click Me</button>
      </Animation>
    </Center>
  );
};

const AnimationButtonExample = () => {
  return (
    <div className="ex-animation-button">
      <AnimationButton />
      <style>{`.ex-animation-button plus-animation {  display: inline-block;}`}</style>
    </div>
  )
};

export default AnimationButtonExample;