/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Animation, Center } from '@htmlplus/react';
const AnimationMethods = () => {
  return (
    <>
      <Center>
        <Animation id="element2" iterations="3" name="fade-out"></Animation>
      </Center>
      <br />
      <Center>
        <button onClick={() => window.element2.cancel()}>Cancel</button>
        <button onClick={() => window.element2.finish()}>Finish</button>
        <button onClick={() => window.element2.pause()}>Pause</button>
        <button onClick={() => window.element2.play()}>Play</button>
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
