/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Center, Switch } from '@htmlplus/react';

function App() {
  function onChange(event) {
    alert(`Will be changed to ${event.target.checked ? 'On' : 'Off'}`);
  }
  return (
    <Center>
      <Switch onChange={onChange}></Switch>
    </Center>
  );
}

const SwitchEvent = () => {
  return (
    <div className="ex-switch-event">
      <App />
    </div>
  )
};

export default SwitchEvent;
