/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Center, Counter } from '@htmlplus/react';

function App() {
  return (
    <Center>
      <Counter decimal="." decimals={2} separator="," to={1000} play></Counter>
    </Center>
  );
}

const CounterSeparatorDecimal = () => {
  return (
    <div className="ex-counter-separator-decimal">
      <App />
    </div>
  )
};

export default CounterSeparatorDecimal;
