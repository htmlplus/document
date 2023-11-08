/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Avatar, Center, Tooltip } from '@htmlplus/react';

function App() {
  return (
    <Center>
      <Avatar.Group>
        <Avatar>
          <img src="https://picsum.photos/id/177/90/90" />
          <a href="https://picsum.photos/id/177/90/90" target="_blank"></a>
        </Avatar>
        <Tooltip>Tooltip</Tooltip>
        <Avatar>
          <img src="https://picsum.photos/id/177/90/90" />
          <a href="https://picsum.photos/id/177/90/90" target="_blank"></a>
        </Avatar>
        <Tooltip>Tooltip</Tooltip>
        <Avatar>
          <img src="https://picsum.photos/id/177/90/90" />
          <a href="https://picsum.photos/id/177/90/90" target="_blank"></a>
        </Avatar>
        <Tooltip>Tooltip</Tooltip>
      </Avatar.Group>
    </Center>
  );
}

const AvatarGroupLinkWithTooltip = () => {
  return (
    <div className="ex-avatar-group-link-with-tooltip">
      <App />
    </div>
  )
};

export default AvatarGroupLinkWithTooltip;
