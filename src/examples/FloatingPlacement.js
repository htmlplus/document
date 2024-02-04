/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/core/faker.js';
import '@htmlplus/core/floating.js';
import '@htmlplus/core/icon.js';

function App() {
  return (
    <div
      style={{
        position: 'relative'
      }}
    >
      <plus-faker api="lorem.paragraphs"></plus-faker>
      <br />
      <br />
      <br />
      <plus-floating placement="bottom">
        <plus-icon name="circle-fill"></plus-icon>
      </plus-floating>
    </div>
  );
}

const FloatingPlacement = () => {
  return (
    <div className="ex-floating-placement">
      <App />
    </div>
  )
};

export default FloatingPlacement;
