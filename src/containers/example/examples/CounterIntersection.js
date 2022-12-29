/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { useState } from 'react';
import { Counter, Intersection } from '@htmlplus/react';
const CounterIntersection = () => {
  const [play, setPlay] = useState(false);
  const onChange = (event) => {
    setPlay(event.detail.isIntersecting);
  };
  return (
    <div className="container">
      <Intersection onChange={(event) => onChange(event)}>
        <Counter to="1000" play={play}></Counter>
      </Intersection>
    </div>
  );
};

const CounterIntersectionExample = () => {
  return (
    <div className="ex-counter-intersection dock">
      <CounterIntersection />
      <style>{`.ex-counter-intersection plus-intersection {  display: block;  text-align: center;  margin: 25rem auto;}.ex-counter-intersection .container {  position: relative;  height: 20rem;  overflow: auto;  background-color: #eeeeee;}`}</style>
    </div>
  )
};

export default CounterIntersectionExample;
