/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/grid-item.js';
import '@htmlplus/ui/grid.js';

function App() {
  return (
    <plus-grid align-items="center" vertical>
      <plus-grid-item xs="3">
        <div>Item</div>
      </plus-grid-item>
      <plus-grid-item xs="grow">
        <div>Item</div>
      </plus-grid-item>
      <plus-grid-item xs="3">
        <div>Item</div>
      </plus-grid-item>
    </plus-grid>
  );
}

const GridVertical = () => {
  return (
    <div className="ex-preview ex-grid-vertical">
      <App />
      <style>{`.ex-grid-vertical { plus-grid {  height: 12rem;}plus-grid div {  color: #00bcd4;  border: 1px solid #ffffff;  background-color: #e0f7fa;  height: 100%;  padding: 0.5em;  text-align: center;} }`}</style>
    </div>
  )
};

export default GridVertical;
