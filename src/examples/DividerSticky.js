/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/core/divider.js';
import '@htmlplus/core/sticky.js';

function App() {
  return (
    <div className="container">
      <plus-sticky>
        <plus-divider>
          <span>Today</span>
        </plus-divider>
      </plus-sticky>
      <plus-sticky>
        <plus-divider>
          <span>Yesterday</span>
        </plus-divider>
      </plus-sticky>
      <plus-sticky>
        <plus-divider>
          <span>5 Days Ago</span>
        </plus-divider>
      </plus-sticky>
      <plus-sticky>
        <plus-divider>
          <span>2 Weeks Ago</span>
        </plus-divider>
      </plus-sticky>
      <plus-sticky>
        <plus-divider>
          <span>1 Month Ago</span>
        </plus-divider>
      </plus-sticky>
    </div>
  );
}

const DividerSticky = () => {
  return (
    <div className="ex-divider-sticky dock">
      <App />
      <style>{`.ex-divider-sticky .container {  height: 20rem;  overflow: auto;}.ex-divider-sticky span {  background-color: white;  color: black;  padding: 0.5rem 1rem;}.ex-divider-sticky plus-divider {  --plus-divider-color: lightgray;  --plus-divider-opacity: 1;}.ex-divider-sticky plus-sticky {  margin-bottom: 20rem;}`}</style>
    </div>
  )
};

export default DividerSticky;
