/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/grid-item.js';
import '@htmlplus/ui/grid.js';

function App() {
  return (
    <plus-grid reverse>
      <plus-grid-item xs="2">
        <div>Item 1</div>
      </plus-grid-item>
      <plus-grid-item xs="2">
        <div>Item 2</div>
      </plus-grid-item>
      <plus-grid-item xs="2">
        <div>Item 3</div>
      </plus-grid-item>
    </plus-grid>
  );
}

const GridReverse = () => {
  return (
    <div className="ex-preview ex-grid-reverse">
      <App />
      <style>{`.ex-grid-reverse { plus-grid div {  color: #00bcd4;  border: 1px solid #ffffff;  background-color: #e0f7fa;  padding: 0.5em;  text-align: center;} }`}</style>
    </div>
  )
};

export default GridReverse;
