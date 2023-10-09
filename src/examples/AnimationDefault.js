/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Animation, Center } from '@htmlplus/react';

function App() {
  return (
    <Center>
      <Animation iterations={Infinity} name="fade-in" run></Animation>
    </Center>
  );
}

const AnimationDefaultExample = () => {
  return (
    <div className="ex-animation-default">
      <App />
      <style>{`.ex-animation-default plus-animation {  background: lightgray;  width: 100px;  height: 100px;}`}</style>
    </div>
  )
};

export default AnimationDefaultExample;
