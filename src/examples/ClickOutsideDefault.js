/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { useEffect, useRef, useState } from 'react';

import '@htmlplus/ui/card-body.js';
import '@htmlplus/ui/card.js';
import '@htmlplus/ui/click-outside.js';

function App() {
  const outsideRef = useRef();
  const insideRef = useRef();
  const clickOutsideRef = useRef();
  const [inside, setInside] = useState(0);
  const [outside, setOutside] = useState(0);
  useEffect(() => {
    if (!clickOutsideRef.current) return;
    function onClick() {
      const count = inside + 1;
      setInside(count);
      insideRef.current.innerHTML = `${count}`;
    }
    clickOutsideRef.current.addEventListener('click', onClick);
    return () => {
      if (!clickOutsideRef.current) return;
      clickOutsideRef.current.removeEventListener('click', onClick);
    };
  });
  useEffect(() => {
    if (!clickOutsideRef.current) return;
    function onPlusClickOutside() {
      const count = outside + 1;
      setOutside(count);
      outsideRef.current.innerHTML = `${count}`;
    }
    clickOutsideRef.current.addEventListener('plus-click-outside', onPlusClickOutside);
    return () => {
      if (!clickOutsideRef.current) return;
      clickOutsideRef.current.removeEventListener('plus-click-outside', onPlusClickOutside);
    };
  });
  return (
    <plus-click-outside ref={clickOutsideRef}>
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
    <div className="ex-click-outside-default">
      <App />
    </div>
  )
};

export default ClickOutsideDefault;
