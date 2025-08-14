/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/center.js';
import '@htmlplus/ui/counter.js';

function App() {
  return (
    <plus-center>
      <plus-counter delay={1500} to={1000} play></plus-counter>
    </plus-center>
  );
}

const CounterDelay = () => {
  return (
    <div className="counter-delay">
      <App />
    </div>
  )
};

export default CounterDelay;
