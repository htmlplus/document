/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/animation.js';
import '@htmlplus/ui/animation/names/fading-exits/fade-out-down.js';
import '@htmlplus/ui/grid-item.js';
import '@htmlplus/ui/grid.js';

function App() {
  return (
    <>
      <plus-grid justify-content="evenly" gutter="md">
        <plus-grid-item xs="12" sm="auto">
          <plus-animation
            easing="linear"
            iterations={Infinity}
            name="fade-out-down"
            run
          ></plus-animation>
        </plus-grid-item>
        <plus-grid-item xs="12" sm="auto">
          <plus-animation
            easing="ease-in"
            iterations={Infinity}
            name="fade-out-down"
            run
          ></plus-animation>
        </plus-grid-item>
        <plus-grid-item xs="12" sm="auto">
          <plus-animation
            easing="cubic-bezier(0.25, 0.50, 0.25, 0.50)"
            iterations={Infinity}
            name="fade-out-down"
            run
          ></plus-animation>
        </plus-grid-item>
      </plus-grid>
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
      <style>{`.ex-animation-easing { plus-animation {  background: lightgray;  width: 100px;  height: 100px;  margin: auto;} }`}</style>
    </div>
  )
};

export default AnimationEasing;
