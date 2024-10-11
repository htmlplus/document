/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { useEffect, useRef } from 'react';

import '@htmlplus/ui/center.js';
import '@htmlplus/ui/switch.js';

function App() {
  const switchRef = useRef();
  useEffect(() => {
    if (!switchRef.current) return;
    function onPlusChange(event) {
      alert(`Will be changed to ${event.target.checked ? 'On' : 'Off'}`);
    }
    switchRef.current.addEventListener('PlusChange', onPlusChange);
    return () => {
      if (!switchRef.current) return;
      switchRef.current.removeEventListener('PlusChange', onPlusChange);
    };
  });
  return (
    <plus-center>
      <plus-switch ref={switchRef}></plus-switch>
    </plus-center>
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
