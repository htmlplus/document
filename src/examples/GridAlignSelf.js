/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/grid-item.js';
import '@htmlplus/ui/grid.js';

function App() {
  return (
    <plus-grid align-items="center">
      <plus-grid-item xs="grow" align-self="start">
        <div>Item</div>
      </plus-grid-item>
      <plus-grid-item xs="grow">
        <div>Item</div>
      </plus-grid-item>
      <plus-grid-item xs="grow" align-self="end">
        <div>Item</div>
      </plus-grid-item>
    </plus-grid>
  );
}

const GridAlignSelf = () => {
  return (
    <div className="ex-preview ex-grid-align-self">
      <App />
      <style>{`.ex-grid-align-self { plus-grid {  background-color: whitesmoke;  height: 8rem;}plus-grid div {  color: #00bcd4;  border: 1px solid #ffffff;  background-color: #e0f7fa;  padding: 0.5em;  text-align: center;} }`}</style>
    </div>
  )
};

export default GridAlignSelf;
