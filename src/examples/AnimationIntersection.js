/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { useRef } from 'react';

import '@htmlplus/ui/animation.js';
import '@htmlplus/ui/animation/names/attention-seekers/heart-beat.js';
import '@htmlplus/ui/intersection.js';

function App() {
  const animationRef = useRef();
  function onPlusChange(event) {
    animationRef.current.run = event.detail.isIntersecting;
  }
  return (
    <div className="container">
      <plus-intersection onPlusChange={onPlusChange}>
        <plus-animation name="heart-beat" ref={animationRef}></plus-animation>
      </plus-intersection>
    </div>
  );
}

const AnimationIntersection = () => {
  return (
    <div className="ex-animation-intersection dock">
      <App />
      <style>{`.ex-animation-intersection plus-animation {  background: lightgray;  width: 100px;  height: 100px;  margin: auto;}.ex-animation-intersection plus-intersection {  display: block;  text-align: center;  margin: 1000px auto;}.ex-animation-intersection .container {  position: relative;  height: 20rem;  overflow: auto;  background-color: whitesmoke;}`}</style>
    </div>
  )
};

export default AnimationIntersection;
