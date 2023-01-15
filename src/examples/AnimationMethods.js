/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Animation, Center } from '@htmlplus/react';
const AnimationMethods = () => {
  return (
    <>
      <Center>
        <Animation id="animation4" iterations="3" name="fade-out"></Animation>
      </Center>
      <br />
      <Center>
        <button onClick={() => window.animation4.cancel()}>Cancel</button>
        <button onClick={() => window.animation4.finish()}>Finish</button>
        <button onClick={() => window.animation4.pause()}>Pause</button>
        <button onClick={() => window.animation4.play()}>Play</button>
      </Center>
    </>
  );
};

const AnimationMethodsExample = () => {
  return (
    <div className="ex-animation-methods">
      <AnimationMethods />
      <style>{`.ex-animation-methods button {  margin: 0 0.5rem;}.ex-animation-methods plus-animation {  background: lightgray;  width: 100px;  height: 100px;}`}</style>
    </div>
  )
};

export default AnimationMethodsExample;
