/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/animation.js';
import '@htmlplus/ui/center.js';

function App() {
  return (
    <plus-center>
      <plus-animation iterations={Infinity} name="fade-in" run></plus-animation>
    </plus-center>
  );
}

const AnimationDefault = () => {
  return (
    <div className="animation-default">
      <App />
      <style>{`.animation-default { plus-animation {  background: lightgray;  width: 100px;  height: 100px;} }`}</style>
    </div>
  )
};

export default AnimationDefault;
