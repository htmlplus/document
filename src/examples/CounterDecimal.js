/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Center, Counter } from '@htmlplus/react';

function App() {
  return (
    <Center>
      <Counter decimal="/" decimals={3} to={1000} play></Counter>
    </Center>
  );
}

const CounterDecimal = () => {
  return (
    <div className="ex-counter-decimal">
      <App />
    </div>
  )
};

export default CounterDecimal;
