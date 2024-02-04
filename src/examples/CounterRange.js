/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/core/center.js';
import '@htmlplus/core/counter.js';

function App() {
  return (
    <plus-center>
      <plus-counter from={10} to={1000} play></plus-counter>
    </plus-center>
  );
}

const CounterRange = () => {
  return (
    <div className="ex-counter-range">
      <App />
    </div>
  )
};

export default CounterRange;
