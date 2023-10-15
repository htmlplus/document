/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Divider, Sticky } from '@htmlplus/react';

function App() {
  return (
    <div className="container">
      <Sticky>
        <Divider>
          <span>Today</span>
        </Divider>
      </Sticky>
      <Sticky>
        <Divider>
          <span>Yesterday</span>
        </Divider>
      </Sticky>
      <Sticky>
        <Divider>
          <span>5 Days Ago</span>
        </Divider>
      </Sticky>
      <Sticky>
        <Divider>
          <span>2 Weeks Ago</span>
        </Divider>
      </Sticky>
      <Sticky>
        <Divider>
          <span>1 Month Ago</span>
        </Divider>
      </Sticky>
    </div>
  );
}

const DividerStickyExample = () => {
  return (
    <div className="ex-divider-sticky dock">
      <App />
      <style>{`.ex-divider-sticky .container {  height: 20rem;  overflow: auto;}.ex-divider-sticky span {  background-color: white;  color: black;  padding: 0.5rem 1rem;}.ex-divider-sticky plus-divider {  --plus-divider-color: lightgray;  --plus-divider-opacity: 1;}.ex-divider-sticky plus-sticky {  margin-bottom: 20rem;}`}</style>
    </div>
  )
};

export default DividerStickyExample;
