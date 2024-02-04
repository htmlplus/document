/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/core/grid-item.js';
import '@htmlplus/core/grid.js';

function App() {
  return (
    <plus-grid gutter-x="md">
      <plus-grid-item xs="12" sm="6" lg="5">
        <div>xs=12, sm=6, lg=5</div>
      </plus-grid-item>
      <plus-grid-item xs="12" sm="6" lg="4">
        <div>xs=12, sm=6, lg=4</div>
      </plus-grid-item>
      <plus-grid-item xs="12" sm="7" lg="3">
        <div>xs=12, sm=7, lg=3</div>
      </plus-grid-item>
      <plus-grid-item xs="12" sm="5" lg="3">
        <div>xs=12, sm=5, lg=3</div>
      </plus-grid-item>
      <plus-grid-item xs="12" sm="5" lg="4">
        <div>xs=12, sm=5, lg=4</div>
      </plus-grid-item>
      <plus-grid-item xs="12" sm="7" lg="5">
        <div>xs=12, sm=7, lg=5</div>
      </plus-grid-item>
    </plus-grid>
  );
}

const GridGutterX = () => {
  return (
    <div className="ex-grid-gutter-x">
      <App />
      <style>{`.ex-grid-gutter-x plus-grid div {  color: #00bcd4;  border: 1px solid #ffffff;  background-color: #e0f7fa;  padding: 0.5em;  text-align: center;}`}</style>
    </div>
  )
};

export default GridGutterX;
