/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/core/grid-item.js';
import '@htmlplus/core/grid.js';

function App() {
  return (
    <plus-grid>
      <plus-grid-item xs="12" md="4">
        <div>xs=12, md=4</div>
      </plus-grid-item>
      <plus-grid-item xs="12" md="4">
        <div>xs=12, md=4</div>
      </plus-grid-item>
      <plus-grid-item xs="12" md="4">
        <div>xs=12, md=4</div>
      </plus-grid-item>
    </plus-grid>
  );
}

const GridDefault = () => {
  return (
    <div className="ex-grid-default">
      <App />
      <style>{`.ex-grid-default plus-grid div {  color: #00bcd4;  border: 1px solid #ffffff;  background-color: #e0f7fa;  padding: 0.5em;  text-align: center;}`}</style>
    </div>
  )
};

export default GridDefault;
