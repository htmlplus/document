/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/divider.js';
import '@htmlplus/ui/sticky.js';

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
    <div className="ex-preview ex-divider-sticky dock">
      <App />
      <style>{`.ex-divider-sticky { .container {  height: 20rem;  overflow: auto;}span {  background-color: white;  padding: 0 0.5rem;}plus-divider {  gap: 0;}plus-sticky {  margin-bottom: 20rem;} }`}</style>
    </div>
  )
};

export default DividerSticky;
