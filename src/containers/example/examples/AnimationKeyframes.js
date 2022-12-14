/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Animation } from '@htmlplus/react';
const AnimationKeyframes = () => {
  let keyframes = [
    {
      transform: 'scale(0) rotate(0deg) translate(-50%, -50%)',
      opacity: '1'
    },
    {
      transform: 'scale(7) rotate(960deg) translate(-50%, -50%)',
      opacity: '0'
    }
  ];
  return (
    <div className="root">
      <Animation
        duration="5000"
        iterations="Infinity"
        keyframes={keyframes}
        run
      ></Animation>
    </div>
  );
};

const AnimationKeyframesExample = () => {
  return (
    <div className="ex-animation-keyframes">
      <AnimationKeyframes />
      <style>{`.ex-animation-keyframes .root {  padding: 5rem 0;  position: relative;}.ex-animation-keyframes plus-animation {  position: absolute;  top: 50%;  left: 50%;  width: 1rem;  height: 1rem;  border: solid 1px red;  transform-origin: top left;}`}</style>
    </div>
  )
};

export default AnimationKeyframesExample;
