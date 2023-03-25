/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Avatar, Center, Tooltip } from '@htmlplus/react';
const AvatarGroupTooltip = () => {
  return (
    <Center>
      <Avatar.Group stacked>
        <Avatar shape="circle">A</Avatar>
        <Tooltip>Tooltip A</Tooltip>
        <Avatar shape="circle">B</Avatar>
        <Tooltip>Tooltip B</Tooltip>
        <Avatar shape="circle">C</Avatar>
        <Tooltip>Tooltip C</Tooltip>
      </Avatar.Group>
    </Center>
  );
};

const AvatarGroupTooltipExample = () => {
  return (
    <div className="ex-avatar-group-tooltip">
      <AvatarGroupTooltip />
    </div>
  )
};

export default AvatarGroupTooltipExample;
