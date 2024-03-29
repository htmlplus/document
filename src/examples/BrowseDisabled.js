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
    function onPlusChange() {
      alert('File selected.');
    }
    browseRef.current.addEventListener('plus-change', onPlusChange);
    return () => {
      if (!browseRef.current) return;
      browseRef.current.removeEventListener('plus-change', onPlusChange);
    };
  });
  return (
    <plus-center>
      <plus-browse disabled ref={browseRef}>
        {' '}
        Click Here{' '}
      </plus-browse>
    </plus-center>
  );
}

const BrowseDisabled = () => {
  return (
    <div className="ex-browse-disabled">
      <App />
    </div>
  )
};

export default BrowseDisabled;
