/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { useRef } from 'react';

import { Counter, Intersection } from '@htmlplus/react';

function App() {
  const counterRef = useRef();
  function onChange(event) {
    counterRef.current.play = event.detail.isIntersecting;
  }
  return (
    <div className="container">
      <Intersection onChange={onChange}>
        <Counter to={1000} ref={counterRef}></Counter>
      </Intersection>
    </div>
  );
}

const CounterIntersectionExample = () => {
  return (
    <div className="ex-counter-intersection dock">
      <App />
      <style>{`.ex-counter-intersection plus-intersection {  display: block;  text-align: center;  margin: 25rem auto;}.ex-counter-intersection .container {  position: relative;  height: 20rem;  overflow: auto;  background-color: whitesmoke;}`}</style>
    </div>
  )
};

export default CounterIntersectionExample;
