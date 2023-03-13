/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Avatar } from '@htmlplus/react';
const AvatarGroup = () => {
  return (
    <div className="center">
      <Avatar.Group>
        <Avatar>
          <img src="https://picsum.photos/id/331/90/90" />
        </Avatar>
        <Avatar>
          <img src="https://picsum.photos/id/334/90/90" />
        </Avatar>
        <Avatar>
          <img src="https://picsum.photos/id/338/90/90" />
        </Avatar>
      </Avatar.Group>
    </div>
  );
};

const AvatarGroupExample = () => {
  return (
    <div className="ex-avatar-group">
      <AvatarGroup />
      <style>{`.ex-avatar-group .center {  text-align: center;}`}</style>
    </div>
  )
};

export default AvatarGroupExample;
