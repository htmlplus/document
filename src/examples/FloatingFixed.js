/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Faker, Floating, Icon } from '@htmlplus/react';

function App() {
  return (
    <>
      <Faker api="lorem.paragraphs"></Faker>
      <br />
      <br />
      <br />
      <Floating fixed>
        <Icon name="circle-fill"></Icon>
      </Floating>
    </>
  );
}

const FloatingFixed = () => {
  return (
    <div className="ex-floating-fixed">
      <App />
    </div>
  )
};

export default FloatingFixed;
