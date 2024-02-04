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
      <plus-floating>
        <plus-icon name="circle-fill"></plus-icon>
      </plus-floating>
    </div>
  );
}

const FloatingDefault = () => {
  return (
    <div className="ex-floating-default">
      <App />
    </div>
  )
};

export default FloatingDefault;
