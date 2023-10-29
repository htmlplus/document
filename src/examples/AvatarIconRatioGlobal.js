/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Avatar, Center, Icon } from '@htmlplus/react';

function App() {
  return (
    <Center>
      <Avatar.Group>
        <Avatar>
          <Icon name="person" className="icon-1"></Icon>
        </Avatar>
        <Avatar>
          <Icon name="person" className="icon-2"></Icon>
        </Avatar>
        <Avatar>
          <Icon name="person" className="icon-3"></Icon>
        </Avatar>
      </Avatar.Group>
    </Center>
  );
}

const AvatarIconRatioGlobalExample = () => {
  return (
    <div className="ex-avatar-icon-ratio-global">
      <App />
      <style>{`.ex-avatar-icon-ratio-global .icon-1 {  padding: 0.25em;}.ex-avatar-icon-ratio-global .icon-2 {  padding: 0.5em;}.ex-avatar-icon-ratio-global .icon-3 {  padding: 0.75em;}`}</style>
    </div>
  )
};

export default AvatarIconRatioGlobalExample;
