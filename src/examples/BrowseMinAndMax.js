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
      if (event.detail.error) {
        alert(event.detail.error.message);
      }
    }
    browseRef.current.addEventListener('plus-change', onPlusChange);
    return () => {
      if (!browseRef.current) return;
      browseRef.current.removeEventListener('plus-change', onPlusChange);
    };
  });
  return (
    <plus-center>
      <plus-browse min={3} max={5} multiple ref={browseRef}>
        {' '}
        Click Here{' '}
      </plus-browse>
    </plus-center>
  );
}

const BrowseMinAndMax = () => {
  return (
    <div className="ex-browse-min-and-max">
      <App />
    </div>
  )
};

export default BrowseMinAndMax;
