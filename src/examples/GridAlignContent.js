/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/core/grid-item.js';
import '@htmlplus/core/grid.js';

function App() {
  return (
    <plus-grid align-content="center">
      <plus-grid-item xs="6">
        <div>Item</div>
      </plus-grid-item>
      <plus-grid-item xs="3">
        <div>Item</div>
      </plus-grid-item>
      <plus-grid-item xs="3">
        <div>Item</div>
      </plus-grid-item>
      <plus-grid-item xs="3">
        <div>Item</div>
      </plus-grid-item>
      <plus-grid-item xs="3">
        <div>Item</div>
      </plus-grid-item>
      <plus-grid-item xs="grow">
        <div>Item</div>
      </plus-grid-item>
    </plus-grid>
  );
}

const GridAlignContent = () => {
  return (
    <div className="ex-grid-align-content">
      <App />
      <style>{`.ex-grid-align-content plus-grid {  background-color: whitesmoke;  height: 8rem;}.ex-grid-align-content plus-grid div {  color: #00bcd4;  border: 1px solid #ffffff;  background-color: #e0f7fa;  padding: 0.5em;  text-align: center;}`}</style>
    </div>
  )
};

export default GridAlignContent;
