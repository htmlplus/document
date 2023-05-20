/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Faker, Floating, Icon } from '@htmlplus/react';
const FloatingFixed = () => {
  return (
    <div>
      <Faker api="lorem.paragraphs"></Faker>
      <br />
      <br />
      <br />
      <Floating fixed>
        <Icon name="circle-fill"></Icon>
      </Floating>
    </div>
  );
};

const FloatingFixedExample = () => {
  return (
    <div className="ex-floating-fixed">
      <FloatingFixed />
    </div>
  )
};

export default FloatingFixedExample;
