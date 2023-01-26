/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Faker } from '@htmlplus/react';
const FakerMore = () => {
  return (
    <div className="container">
      <Faker api="name.fullName"></Faker>
      <Faker api="address.county"></Faker>
      <Faker api="date.weekday"></Faker>
      <Faker api="animal.dog"></Faker>
      <Faker api="internet.email"></Faker>
      <Faker api="phone.number"></Faker>
      <Faker api="color.human"></Faker>
      <Faker api="datatype.uuid"></Faker>
    </div>
  );
};

const FakerMoreExample = () => {
  return (
    <div className="ex-faker-more">
      <FakerMore />
      <style>{`.ex-faker-more .container {  display: flex;  flex-direction: column;  align-items: center;}`}</style>
    </div>
  )
};

export default FakerMoreExample;
