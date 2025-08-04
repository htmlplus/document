/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/animation.js';
import '@htmlplus/ui/animation/names/flippers/flip-in-x.js';
import '@htmlplus/ui/animation/names/flippers/flip-in-y.js';
import '@htmlplus/ui/stack.js';

function App() {
  return (
    <plus-stack
      gap="1rem"
      justify="evenly"
      overrides={{
        'sm-before': {
          vertical: true
        },
        'sm-up': {
          vertical: false
        }
      }}
    >
      <plus-animation iterations={Infinity} name="flip-in-x" run></plus-animation>
      <plus-animation iterations={Infinity} name="flip-in-y" run></plus-animation>
    </plus-stack>
  );
}

const AnimationName = () => {
  return (
    <div className="animation-name">
      <App />
      <style>{`.animation-name { plus-animation {  background: lightgray;  width: 100px;  height: 100px;} }`}</style>
    </div>
  )
};

export default AnimationName;
