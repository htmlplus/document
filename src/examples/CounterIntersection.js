/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { useEffect, useRef } from 'react';

import '@htmlplus/core/counter.js';
import '@htmlplus/core/intersection.js';

function App() {
  const intersectionRef = useRef();
  const counterRef = useRef();
  useEffect(() => {
    function onPlusChange(event) {
      counterRef.current.play = event.detail.isIntersecting;
    }
    intersectionRef.current.addEventListener('plus-change', onPlusChange);
    return () => {
      intersectionRef.current.removeEventListener('plus-change', onPlusChange);
    };
  });
  return (
    <div className="container">
      <plus-intersection ref={intersectionRef}>
        <plus-counter to={1000} ref={counterRef}></plus-counter>
      </plus-intersection>
    </div>
  );
}

const CounterIntersection = () => {
  return (
    <div className="ex-counter-intersection dock">
      <App />
      <style>{`.ex-counter-intersection plus-intersection {  display: block;  text-align: center;  margin: 25rem auto;}.ex-counter-intersection .container {  position: relative;  height: 20rem;  overflow: auto;  background-color: whitesmoke;}`}</style>
    </div>
  )
};

export default CounterIntersection;
