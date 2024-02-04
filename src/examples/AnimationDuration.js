/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/core/animation.js';
import '@htmlplus/core/center.js';

function App() {
  return (
    <plus-center>
      <plus-animation duration={2500} iterations={Infinity} name="fade-in" run></plus-animation>
    </plus-center>
  );
}

const AnimationDuration = () => {
  return (
    <div className="ex-animation-duration">
      <App />
      <style>{`.ex-animation-duration plus-animation {  background: lightgray;  width: 100px;  height: 100px;}`}</style>
    </div>
  )
};

export default AnimationDuration;
