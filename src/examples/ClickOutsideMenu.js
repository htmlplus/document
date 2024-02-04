/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { useEffect, useRef, useState } from 'react';

import '@htmlplus/core/card-body.js';
import '@htmlplus/core/card.js';
import '@htmlplus/core/center.js';
import '@htmlplus/core/click-outside.js';

function App() {
  const clickOutsideRef = useRef();
  const [hidden, setHidden] = useState(true);
  function onClick() {
    setHidden(!hidden);
  }
  useEffect(() => {
    function onPlusClickOutside() {
      setHidden(true);
    }
    clickOutsideRef.current.addEventListener('plus-click-outside', onPlusClickOutside);
    return () => {
      clickOutsideRef.current.removeEventListener('plus-click-outside', onPlusClickOutside);
    };
  });
  return (
    <plus-center>
      <plus-click-outside ref={clickOutsideRef}>
        <button onClick={onClick}>Open Menu Dropdown</button>
        <plus-card elevation={10} hidden={hidden} outlined>
          <plus-card-body> It will stay visible until you click outside. </plus-card-body>
        </plus-card>
      </plus-click-outside>
    </plus-center>
  );
}

const ClickOutsideMenu = () => {
  return (
    <div className="ex-click-outside-menu">
      <App />
      <style>{`.ex-click-outside-menu plus-card {  position: absolute;  top: calc(100% + 0.25rem);}.ex-click-outside-menu plus-click-outside {  display: inline-block;  position: relative;}`}</style>
    </div>
  )
};

export default ClickOutsideMenu;
