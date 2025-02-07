/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { useRef } from 'react';

import '@htmlplus/ui/counter.js';
import '@htmlplus/ui/intersection.js';

function App() {
  const counterRef = useRef();
  function onPlusChange(event) {
    counterRef.current.play = event.detail.isIntersecting;
  }
  return (
    <div className="container">
      <plus-intersection onPlusChange={onPlusChange}>
        <plus-counter to={1000} ref={counterRef}></plus-counter>
      </plus-intersection>
    </div>
  );
}

const CounterIntersection = () => {
  return (
    <div className="ex-preview ex-counter-intersection dock">
      <App />
      <style>{`.ex-counter-intersection plus-intersection {  display: block;  text-align: center;  margin: 25rem auto;}.ex-counter-intersection .container {  position: relative;  height: 20rem;  overflow: auto;  background-color: whitesmoke;}`}</style>
    </div>
  )
};

export default CounterIntersection;
