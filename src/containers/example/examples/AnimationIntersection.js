/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { useState } from 'react';
import { Animation, Intersection } from '@htmlplus/react';
import '@htmlplus/core/animation/names/attention-seekers/heart-beat.js';
const AnimationIntersection = () => {
  const [run, setRun] = useState(false);
  const onChange = (event) => {
    setRun(event.detail.isIntersecting);
  };
  return (
    <div className="container">
      <Intersection onChange={(event) => onChange(event)}>
        <Animation name="heart-beat" run={run}></Animation>
      </Intersection>
    </div>
  );
};

const AnimationIntersectionExample = () => {
  return (
    <div className="ex-animation-intersection dock">
      <AnimationIntersection />
      <style>{`.ex-animation-intersection plus-animation {  background: lightgray;  width: 100px;  height: 100px;  margin: auto;}.ex-animation-intersection plus-intersection {  display: block;  text-align: center;  margin: 1000px auto;}.ex-animation-intersection .container {  position: relative;  height: 20rem;  overflow: auto;  background-color: #eeeeee;}`}</style>
    </div>
  )
};

export default AnimationIntersectionExample;