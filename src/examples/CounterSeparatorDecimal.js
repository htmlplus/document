/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/center.js';
import '@htmlplus/ui/counter.js';

function App() {
  return (
    <plus-center>
      <plus-counter decimal="." decimals={2} separator="," to={1000} play></plus-counter>
    </plus-center>
  );
}

const CounterSeparatorDecimal = () => {
  return (
    <div className="ex-preview ex-counter-separator-decimal">
      <App />
    </div>
  )
};

export default CounterSeparatorDecimal;
