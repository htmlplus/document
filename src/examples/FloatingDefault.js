/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Faker, Floating, Icon } from '@htmlplus/react';
const FloatingDefault = () => {
  return (
    <div>
      <Faker api="lorem.paragraphs"></Faker>
      <Floating>
        <Icon name="circle-fill"></Icon>
      </Floating>
    </div>
  );
};

const FloatingDefaultExample = () => {
  return (
    <div className="ex-floating-default">
      <FloatingDefault />
      <style>{`.ex-floating-default div {  position: relative;}`}</style>
    </div>
  )
};

export default FloatingDefaultExample;
