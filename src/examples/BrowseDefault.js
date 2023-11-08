/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Browse } from '@htmlplus/react';

function App() {
  function onChange(event) {
    const name = event.detail.files[0].file.name;
    alert(`File '${name}' selected.`);
  }
  return (
    <Browse droppable onChange={onChange}>
      {' '}
      Click or Drag & Drop a file(s) here{' '}
    </Browse>
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
