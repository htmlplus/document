/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Center, Counter } from '@htmlplus/react';

function App() {
  const numerals = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return (
    <Center>
      <Counter to={1000} play numerals={numerals}></Counter>
    </Center>
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
