/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/grid-item.js';
import '@htmlplus/ui/grid.js';

function App() {
  return (
    <plus-grid justify-content="center">
      <plus-grid-item xs="2">
        <div>Item</div>
      </plus-grid-item>
      <plus-grid-item xs="2">
        <div>Item</div>
      </plus-grid-item>
      <plus-grid-item xs="2">
        <div>Item</div>
      </plus-grid-item>
    </plus-grid>
  );
}

const GridJustifyContent = () => {
  return (
    <div className="ex-grid-justify-content">
      <App />
      <style>{`.ex-grid-justify-content plus-grid div {  color: #00bcd4;  border: 1px solid #ffffff;  background-color: #e0f7fa;  padding: 0.5em;  text-align: center;}`}</style>
    </div>
  )
};

export default GridJustifyContent;
