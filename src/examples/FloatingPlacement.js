/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Faker, Floating, Icon } from '@htmlplus/react';

function App() {
  return (
    <div>
      <Faker api="lorem.paragraphs"></Faker>
      <br />
      <br />
      <br />
      <Floating placement="bottom">
        <Icon name="circle-fill"></Icon>
      </Floating>
    </div>
  );
}

const FloatingPlacementExample = () => {
  return (
    <div className="ex-floating-placement">
      <App />
      <style>{`.ex-floating-placement div {  position: relative;}`}</style>
    </div>
  )
};

export default FloatingPlacementExample;
