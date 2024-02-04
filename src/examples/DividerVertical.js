/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/core/divider.js';
import '@htmlplus/core/faker.js';
import '@htmlplus/core/grid-item.js';
import '@htmlplus/core/grid.js';

function App() {
  return (
    <plus-grid align-items="center" justify-content="evenly">
      <plus-grid-item xs="5">
        <plus-faker></plus-faker>
      </plus-grid-item>
      <plus-divider vertical></plus-divider>
      <plus-grid-item xs="5">
        <plus-faker></plus-faker>
      </plus-grid-item>
    </plus-grid>
  );
}

const DividerVertical = () => {
  return (
    <div className="ex-divider-vertical">
      <App />
    </div>
  )
};

export default DividerVertical;
