/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { useRef } from 'react';

import { Animation, Center } from '@htmlplus/react';

import '@htmlplus/core/animation/names/attention-seekers/tada.js';

function App() {
  const animationRef = useRef();
  function onClick() {
    animationRef.current.run = true;
  }
  return (
    <Center>
      <Animation name="tada" ref={animationRef}>
        <button onClick={onClick}>Click Me</button>
      </Animation>
    </Center>
  );
}

const AnimationButton = () => {
  return (
    <div className="ex-animation-button">
      <App />
      <style>{`.ex-animation-button plus-animation {  display: inline-block;}`}</style>
    </div>
  )
};

export default AnimationButton;
