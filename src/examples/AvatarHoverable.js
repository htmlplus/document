/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Avatar } from '@htmlplus/react';
const AvatarHoverable = () => {
  return (
    <div className="center">
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
    </div>
  );
};

const AvatarHoverableExample = () => {
  return (
    <div className="ex-avatar-hoverable">
      <AvatarHoverable />
      <style>{`.ex-avatar-hoverable .center {  text-align: center;}`}</style>
    </div>
  )
};

export default AvatarHoverableExample;
