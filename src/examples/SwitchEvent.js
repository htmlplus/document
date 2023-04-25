/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Center, Switch } from '@htmlplus/react';
const SwitchEvent = () => {
  const onChange = (event) => {
    window.alert(`Will be changed to ${event.target.checked ? 'On' : 'Off'}`);
  };
  return (
    <Center>
      <Switch onChange={(event) => onChange(event)}></Switch>
    </Center>
  );
};

const SwitchEventExample = () => {
  return (
    <div className="ex-switch-event">
      <SwitchEvent />
    </div>
  )
};

export default SwitchEventExample;
