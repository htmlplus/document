/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Faker, Stack } from '@htmlplus/react';
const FakerMore = () => {
  return (
    <Stack vertical>
      <Faker api="name.fullName"></Faker>
      <Faker api="address.county"></Faker>
      <Faker api="date.weekday"></Faker>
      <Faker api="animal.dog"></Faker>
      <Faker api="internet.email"></Faker>
      <Faker api="phone.number"></Faker>
      <Faker api="color.human"></Faker>
      <Faker api="datatype.uuid"></Faker>
    </Stack>
  );
};

const FakerMoreExample = () => {
  return (
    <div className="ex-faker-more">
      <FakerMore />
    </div>
  )
};

export default FakerMoreExample;
