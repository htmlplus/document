/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Avatar, Center } from '@htmlplus/react';
const AvatarGroupHoverable = () => {
  return (
    <Center>
      <Avatar.Group stacked hoverable>
        <Avatar shape="circle">
          <img src="https://picsum.photos/id/548/90/90" />
        </Avatar>
        <Avatar shape="circle">
          <img src="https://picsum.photos/id/628/90/90" />
        </Avatar>
        <Avatar shape="circle">
          <img src="https://picsum.photos/id/660/90/90" />
        </Avatar>
        <Avatar shape="circle">
          <img src="https://picsum.photos/id/669/90/90" />
        </Avatar>
        <Avatar shape="circle">+2</Avatar>
      </Avatar.Group>
    </Center>
  );
};

const AvatarGroupHoverableExample = () => {
  return (
    <div className="ex-avatar-group-hoverable">
      <AvatarGroupHoverable />
    </div>
  )
};

export default AvatarGroupHoverableExample;
