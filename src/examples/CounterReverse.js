/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/core/center.js';
import '@htmlplus/core/counter.js';

function App() {
  return (
    <plus-center>
      <plus-counter from={1000} to={10} play></plus-counter>
    </plus-center>
  );
}

const CounterReverse = () => {
  return (
    <div className="ex-counter-reverse">
      <App />
    </div>
  )
};

export default CounterReverse;
