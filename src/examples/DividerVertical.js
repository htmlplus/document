/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/divider.js';
import '@htmlplus/ui/faker.js';

function App() {
  return (
    <plus-stack>
      <plus-faker></plus-faker>
      <plus-divider vertical>OR</plus-divider>
      <plus-faker></plus-faker>
    </plus-stack>
  );
}

const DividerVertical = () => {
  return (
    <div className="ex-divider-vertical">
      <App />
      <style>{`.ex-divider-vertical plus-divider {  margin: 0 1rem;}`}</style>
    </div>
  )
};

export default DividerVertical;
