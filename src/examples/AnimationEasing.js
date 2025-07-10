/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/animation.js';
import '@htmlplus/ui/animation/names/fading-exits/fade-out-down.js';
import '@htmlplus/ui/stack.js';

function App() {
  return (
    <>
      <plus-stack
        gap="1rem"
        justify="evenly"
        override={{
          'sm-down': {
            vertical: true
          },
          'sm-and-up': {
            vertical: false
          }
        }}
      >
        <plus-animation
          easing="linear"
          iterations={Infinity}
          name="fade-out-down"
          run
        ></plus-animation>
        <plus-animation
          easing="ease-in"
          iterations={Infinity}
          name="fade-out-down"
          run
        ></plus-animation>
        <plus-animation
          easing="cubic-bezier(0.25, 0.50, 0.25, 0.50)"
          iterations={Infinity}
          name="fade-out-down"
          run
        ></plus-animation>
      </plus-stack>
      <br />
      <br />
      <br />
    </>
  );
}

const AnimationEasing = () => {
  return (
    <div className="ex-preview ex-animation-easing">
      <App />
      <style>{`.ex-animation-easing { plus-animation {  background: lightgray;  width: 100px;  height: 100px;} }`}</style>
    </div>
  )
};

export default AnimationEasing;
