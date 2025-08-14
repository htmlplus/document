/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/browse.js';

function App() {
  function onPlusChange(event) {
    const name = event.detail.files[0].file.name;
    alert(`File '${name}' selected.`);
  }
  return (
    <plus-browse droppable onPlusChange={onPlusChange}>
      {' '}
      Click or Drag & Drop a file(s) here{' '}
    </plus-browse>
  );
}

const BrowseDroppable = () => {
  return (
    <div className="browse-droppable">
      <App />
      <style>{`.browse-droppable { plus-browse {  background: white;  border: 2px dashed lightgray;  border-radius: 4px;  display: block;  padding: 3rem;  text-align: center;}plus-browse[dragging] {  border-color: darkgray;} }`}</style>
    </div>
  )
};

export default BrowseDroppable;
