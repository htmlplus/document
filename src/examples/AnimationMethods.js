/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { useRef } from 'react';

import '@htmlplus/core/animation.js';
import '@htmlplus/core/center.js';

function App() {
  const animationRef = useRef();
  function onClick1() {
    animationRef.current.cancel();
  }
  function onClick2() {
    animationRef.current.finish();
  }
  function onClick3() {
    animationRef.current.pause();
  }
  function onClick4() {
    animationRef.current.play();
  }
  return (
    <>
      <plus-center>
        <plus-animation iterations={3} name="fade-out" ref={animationRef}></plus-animation>
      </plus-center>
      <br />
      <plus-center>
        <button onClick={onClick1}>Cancel</button>
        <button onClick={onClick2}>Finish</button>
        <button onClick={onClick3}>Pause</button>
        <button onClick={onClick4}>Play</button>
      </plus-center>
    </>
  );
}

const AnimationMethods = () => {
  return (
    <div className="ex-animation-methods">
      <App />
      <style>{`.ex-animation-methods button {  margin: 0 0.5rem;}.ex-animation-methods plus-animation {  background: lightgray;  width: 100px;  height: 100px;}`}</style>
    </div>
  )
};

export default AnimationMethods;
