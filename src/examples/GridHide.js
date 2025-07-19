/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/grid-item.js';
import '@htmlplus/ui/grid.js';

function App() {
  return (
    <plus-grid>
      <plus-grid-item hide-sm xs="3">
        <div>xs=3, hide-sm</div>
      </plus-grid-item>
      <plus-grid-item hide-md xs="4">
        <div>xs=4, hide-md</div>
      </plus-grid-item>
      <plus-grid-item hide-lg xs="5">
        <div>xs=5, hide-lg</div>
      </plus-grid-item>
    </plus-grid>
  );
}

const GridHide = () => {
  return (
    <div className="grid-hide">
      <App />
      <style>{`.grid-hide { plus-grid div {  color: #00bcd4;  border: 1px solid #ffffff;  background-color: #e0f7fa;  padding: 0.5em;  text-align: center;} }`}</style>
    </div>
  )
};

export default GridHide;
