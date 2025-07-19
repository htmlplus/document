/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/center.js';
import '@htmlplus/ui/counter.js';

function App() {
  const numerals = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return (
    <plus-center>
      <plus-counter to={1000} play numerals={numerals}></plus-counter>
    </plus-center>
  );
}

const CounterNumerals = () => {
  return (
    <div className="counter-numerals">
      <App />
    </div>
  )
};

export default CounterNumerals;
