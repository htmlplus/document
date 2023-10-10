/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Faker, Floating, Icon } from '@htmlplus/react';

function App() {
  return (
    <div>
      <Faker api="lorem.paragraphs"></Faker>
      <Floating offset="[20, 20]">
        <Icon name="circle-fill"></Icon>
      </Floating>
    </div>
  );
}

const FloatingOffsetExample = () => {
  return (
    <div className="ex-floating-offset">
      <App />
      <style>{`.ex-floating-offset div {  position: relative;}`}</style>
    </div>
  );
};

export default FloatingOffsetExample;
