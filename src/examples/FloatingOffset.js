/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { useEffect, useRef } from 'react';

import '@htmlplus/core/faker.js';
import '@htmlplus/core/floating.js';
import '@htmlplus/core/icon.js';

function App() {
  const plusFloatingRef = useRef();
  useEffect(() => {
    plusFloatingRef.current.offset = [20, 20];
  }, []);
  return (
    <div>
      <plus-faker api="lorem.paragraphs"></plus-faker>
      <plus-floating ref={plusFloatingRef}>
        <plus-icon name="circle-fill"></plus-icon>
      </plus-floating>
    </div>
  );
}

const FloatingOffset = () => {
  return (
    <div className="ex-floating-offset">
      <App />
      <style>{`.ex-floating-offset div {  position: relative;}`}</style>
    </div>
  )
};

export default FloatingOffset;
