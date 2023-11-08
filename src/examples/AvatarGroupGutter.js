/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Avatar, Center } from '@htmlplus/react';

function App() {
  return (
    <>
      <Center>
        <Avatar.Group>
          <Avatar></Avatar>
          <Avatar></Avatar>
          <Avatar></Avatar>
        </Avatar.Group>
      </Center>
      <br />
      <Center>
        <Avatar.Group stacked>
          <Avatar></Avatar>
          <Avatar></Avatar>
          <Avatar></Avatar>
        </Avatar.Group>
      </Center>
    </>
  );
}

const AvatarGroupGutter = () => {
  return (
    <div className="ex-avatar-group-gutter">
      <App />
      <style>{`.ex-avatar-group-gutter plus-avatar-group {  --plus-avatar-group-gutter-stacked: -2rem;  --plus-avatar-group-gutter-unstacked: 2rem;}`}</style>
    </div>
  )
};

export default AvatarGroupGutter;
