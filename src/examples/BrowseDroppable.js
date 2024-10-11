/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { useEffect, useRef } from 'react';

import '@htmlplus/ui/browse.js';

function App() {
  const browseRef = useRef();
  useEffect(() => {
    if (!browseRef.current) return;
    function onPlusChange(event) {
      const name = event.detail.files[0].file.name;
      alert(`File '${name}' selected.`);
    }
    browseRef.current.addEventListener('PlusChange', onPlusChange);
    return () => {
      if (!browseRef.current) return;
      browseRef.current.removeEventListener('PlusChange', onPlusChange);
    };
  });
  return (
    <plus-browse droppable ref={browseRef}>
      {' '}
      Click or Drag & Drop a file(s) here{' '}
    </plus-browse>
  );
}

const BrowseDroppable = () => {
  return (
    <div className="ex-browse-droppable">
      <App />
      <style>{`.ex-browse-droppable plus-browse {  background: white;  border: 2px dashed lightgray;  border-radius: 4px;  display: block;  padding: 3rem;  text-align: center;}.ex-browse-droppable plus-browse[dragging]:not([dragging='false']) {  border-color: darkgray;}`}</style>
    </div>
  )
};

export default BrowseDroppable;
