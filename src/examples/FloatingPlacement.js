/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Faker, Floating, Icon } from '@htmlplus/react';

function App() {
  return (
    <div
      style={{
        position: 'relative'
      }}
    >
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
    </div>
  )
};

export default FloatingPlacementExample;
