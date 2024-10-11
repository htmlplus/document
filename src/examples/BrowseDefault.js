/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { useEffect, useRef } from 'react';

import '@htmlplus/ui/browse.js';
import '@htmlplus/ui/center.js';

function App() {
  const browseRef = useRef();
  useEffect(() => {
    if (!browseRef.current) return;
    function onPlusChange(event) {
      console.log(event.detail);
    }
    browseRef.current.addEventListener('PlusChange', onPlusChange);
    return () => {
      if (!browseRef.current) return;
      browseRef.current.removeEventListener('PlusChange', onPlusChange);
    };
  });
  return (
    <plus-center>
      <plus-browse ref={browseRef}> Click Here </plus-browse>
    </plus-center>
  );
}

const BrowseDefault = () => {
  return (
    <div className="ex-browse-default">
      <App />
    </div>
  )
};

export default BrowseDefault;
