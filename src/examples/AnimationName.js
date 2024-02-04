/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/core/animation.js';
import '@htmlplus/core/animation/names/flippers/flip-in-x.js';
import '@htmlplus/core/animation/names/flippers/flip-in-y.js';
import '@htmlplus/core/grid-item.js';
import '@htmlplus/core/grid.js';

function App() {
  return (
    <plus-grid justify-content="evenly" gutter="md">
      <plus-grid-item xs="12" sm="auto">
        <plus-animation iterations={Infinity} name="flip-in-x" run></plus-animation>
      </plus-grid-item>
      <plus-grid-item xs="12" sm="auto">
        <plus-animation iterations={Infinity} name="flip-in-y" run></plus-animation>
      </plus-grid-item>
    </plus-grid>
  );
}

const AnimationName = () => {
  return (
    <div className="ex-animation-name">
      <App />
      <style>{`.ex-animation-name plus-animation {  background: lightgray;  width: 100px;  height: 100px;  margin: auto;}`}</style>
    </div>
  )
};

export default AnimationName;
