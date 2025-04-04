/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { useRef, useState } from 'react';

import '@htmlplus/ui/card-body.js';
import '@htmlplus/ui/card.js';
import '@htmlplus/ui/click-outside.js';

function App() {
  const outsideRef = useRef();
  const insideRef = useRef();
  const [inside, setInside] = useState(0);
  const [outside, setOutside] = useState(0);
  function onClick() {
    const count = inside + 1;
    setInside(count);
    insideRef.current.innerHTML = `${count}`;
  }
  function onPlusClickOutside() {
    const count = outside + 1;
    setOutside(count);
    outsideRef.current.innerHTML = `${count}`;
  }
  return (
    <plus-click-outside onClick={onClick} onPlusClickOutside={onPlusClickOutside}>
      <plus-card elevation={10}>
        <plus-card-body>
          <b ref={insideRef}>0</b> time(s) inside clicked
          <br />
          <b ref={outsideRef}>0</b> time(s) outside clicked
        </plus-card-body>
      </plus-card>
    </plus-click-outside>
  );
}

const ClickOutsideDefault = () => {
  return (
    <div className="ex-preview ex-click-outside-default">
      <App />
    </div>
  )
};

export default ClickOutsideDefault;
