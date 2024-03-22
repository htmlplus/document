/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { useEffect, useRef } from 'react';

import '@htmlplus/ui/center.js';
import '@htmlplus/ui/counter.js';

function App() {
  const counterRef = useRef();
  useEffect(() => {
    counterRef.current.numerals = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  }, []);
  return (
    <plus-center>
      <plus-counter to={1000} play ref={counterRef}></plus-counter>
    </plus-center>
  );
}

const CounterNumerals = () => {
  return (
    <div className="ex-counter-numerals">
      <App />
    </div>
  )
};

export default CounterNumerals;
