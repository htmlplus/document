/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/grid-item.js';
import '@htmlplus/ui/grid.js';

function App() {
  return (
    <>
      <plus-grid>
        <plus-grid-item xs="grow">
          <div>xs=grow</div>
        </plus-grid-item>
        <plus-grid-item xs="grow">
          <div>xs=grow</div>
        </plus-grid-item>
        <plus-grid-item xs="grow">
          <div>xs=grow</div>
        </plus-grid-item>
      </plus-grid>
      <plus-grid>
        <plus-grid-item xs="12" md="2">
          <div>xs=12, md=2</div>
        </plus-grid-item>
        <plus-grid-item xs="grow">
          <div>xs=grow</div>
        </plus-grid-item>
        <plus-grid-item xs="12" md="2">
          <div>xs=12, md=2</div>
        </plus-grid-item>
      </plus-grid>
    </>
  );
}

const GridAutoSizing = () => {
  return (
    <div className="grid-auto-sizing">
      <App />
      <style>{`.grid-auto-sizing { plus-grid div {  color: #00bcd4;  border: 1px solid #ffffff;  background-color: #e0f7fa;  padding: 0.5em;  text-align: center;} }`}</style>
    </div>
  )
};

export default GridAutoSizing;
