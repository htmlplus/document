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
      const { errors, file } = event.detail.files[0];
      if (errors?.length) {
        alert(errors[0].message);
      } else {
        alert(`File '${file.name}' selected.`);
      }
    }
    browseRef.current.addEventListener('PlusChange', onPlusChange);
    return () => {
      if (!browseRef.current) return;
      browseRef.current.removeEventListener('PlusChange', onPlusChange);
    };
  });
  return (
    <plus-center>
      <plus-browse min-size={1000000} max-size={5000000} ref={browseRef}>
        Click Here
      </plus-browse>
    </plus-center>
  );
}

const BrowseMinAndMaxSize = () => {
  return (
    <div className="ex-browse-min-and-max-size">
      <App />
    </div>
  )
};

export default BrowseMinAndMaxSize;
