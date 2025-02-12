/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/grid-item.js';
import '@htmlplus/ui/grid.js';

function App() {
  return (
    <plus-grid>
      <plus-grid-item xs="3">
        <div>xs=3</div>
      </plus-grid-item>
      <plus-grid-item offset-xs="3" xs="3">
        <div>offset-xs="3", xs=3</div>
      </plus-grid-item>
      <plus-grid-item xs="3">
        <div>xs=3</div>
      </plus-grid-item>
    </plus-grid>
  );
}

const GridOffset = () => {
  return (
    <div className="ex-preview ex-grid-offset">
      <App />
      <style>{`.ex-grid-offset { plus-grid div {  color: #00bcd4;  border: 1px solid #ffffff;  background-color: #e0f7fa;  padding: 0.5em;  text-align: center;} }`}</style>
    </div>
  )
};

export default GridOffset;
