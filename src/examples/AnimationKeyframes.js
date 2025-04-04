/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/animation.js';

function App() {
  const keyframes = [
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
      <plus-animation
        duration={5000}
        iterations={Infinity}
        run
        keyframes={keyframes}
      ></plus-animation>
    </div>
  );
}

const AnimationKeyframes = () => {
  return (
    <div className="ex-preview ex-animation-keyframes">
      <App />
      <style>{`.ex-animation-keyframes { .root {  padding: 5rem 0;  position: relative;}plus-animation {  position: absolute;  top: 50%;  left: 50%;  width: 1rem;  height: 1rem;  border: solid 1px red;  transform-origin: top left;} }`}</style>
    </div>
  )
};

export default AnimationKeyframes;
