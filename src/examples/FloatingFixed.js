/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/core/faker.js';
import '@htmlplus/core/floating.js';
import '@htmlplus/core/icon.js';

function App() {
  return (
    <>
      <plus-faker api="lorem.paragraphs"></plus-faker>
      <br />
      <br />
      <br />
      <plus-floating fixed>
        <plus-icon name="circle-fill"></plus-icon>
      </plus-floating>
    </>
  );
}

const FloatingFixed = () => {
  return (
    <div className="ex-floating-fixed">
      <App />
    </div>
  )
};

export default FloatingFixed;
