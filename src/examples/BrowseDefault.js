/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { useEffect, useRef } from 'react';

import '@htmlplus/core/browse.js';

function App() {
  const browseRef = useRef();
  useEffect(() => {
    function onPlusChange(event) {
      const name = event.detail.files[0].file.name;
      alert(`File '${name}' selected.`);
    }
    browseRef.current.addEventListener('plus-change', onPlusChange);
    return () => {
      browseRef.current.removeEventListener('plus-change', onPlusChange);
    };
  });
  return (
    <plus-browse droppable ref={browseRef}>
      {' '}
      Click or Drag & Drop a file(s) here{' '}
    </plus-browse>
  );
}

const BrowseDefault = () => {
  return (
    <div className="ex-browse-default">
      <App />
      <style>{`.ex-browse-default plus-browse {  background: white;  border: 2px dashed lightgray;  border-radius: 4px;  display: block;  padding: 3rem;  text-align: center;}.ex-browse-default plus-browse[dragging]:not([dragging='false']) {  border-color: darkgray;}`}</style>
    </div>
  )
};

export default BrowseDefault;
