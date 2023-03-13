/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Avatar } from '@htmlplus/react';
const AvatarStacked = () => {
  return (
    <div className="center">
      <Avatar.Group stacked>
        <Avatar shape="circle">
          <img src="https://picsum.photos/id/331/90/90" />
        </Avatar>
        <Avatar shape="circle">
          <img src="https://picsum.photos/id/334/90/90" />
        </Avatar>
        <Avatar shape="circle">
          <img src="https://picsum.photos/id/338/90/90" />
        </Avatar>
      </Avatar.Group>
    </div>
  );
};

const AvatarStackedExample = () => {
  return (
    <div className="ex-avatar-stacked">
      <AvatarStacked />
      <style>{`.ex-avatar-stacked .center {  text-align: center;}`}</style>
    </div>
  )
};

export default AvatarStackedExample;
