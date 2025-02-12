/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { useRef } from 'react';

import '@htmlplus/ui/card-body.js';
import '@htmlplus/ui/card.js';
import '@htmlplus/ui/center.js';
import '@htmlplus/ui/faker.js';
import '@htmlplus/ui/intersection.js';
import '@htmlplus/ui/sticky.js';

function App() {
  const statusRef = useRef();
  function onPlusChange(event) {
    statusRef.current.innerHTML = event.detail.isIntersecting ? 'In Viewport' : 'Out of Viewport';
  }
  return (
    <div className="container">
      <plus-sticky top="1rem" z-index={1}>
        <plus-center>
          <div className="status" ref={statusRef}></div>
        </plus-center>
      </plus-sticky>
      <plus-intersection onPlusChange={onPlusChange}>
        <plus-card elevation={10}>
          <plus-card-body>
            <plus-faker></plus-faker>
          </plus-card-body>
        </plus-card>
      </plus-intersection>
    </div>
  );
}

const IntersectionDefault = () => {
  return (
    <div className="ex-preview ex-intersection-default dock">
      <App />
      <style>{`.ex-intersection-default { .container {  background-color: whitesmoke;  height: 20rem;  overflow: auto;}.status {  color: white;  background-color: black;  padding: 0.5rem 1rem;  border-radius: 2rem;}plus-card {  width: 15rem;  margin: auto;}plus-intersection {  display: block;  margin: 40rem auto;} }`}</style>
    </div>
  )
};

export default IntersectionDefault;
