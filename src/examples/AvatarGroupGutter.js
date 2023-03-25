/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Avatar, Center } from '@htmlplus/react';
const AvatarGroupGutter = () => {
  return (
    <>
      <Center>
        <Avatar.Group>
          <Avatar>1</Avatar>
          <Avatar>2</Avatar>
          <Avatar>3</Avatar>
        </Avatar.Group>
      </Center>
      <br />
      <Center>
        <Avatar.Group stacked>
          <Avatar>1</Avatar>
          <Avatar>2</Avatar>
          <Avatar>3</Avatar>
        </Avatar.Group>
      </Center>
    </>
  );
};

const AvatarGroupGutterExample = () => {
  return (
    <div className="ex-avatar-group-gutter">
      <AvatarGroupGutter />
      <style>{`.ex-avatar-group-gutter plus-avatar-group {  --plus-avatar-group-gutter-stacked: -2rem;  --plus-avatar-group-gutter-unstacked: 2rem;}`}</style>
    </div>
  )
};

export default AvatarGroupGutterExample;
