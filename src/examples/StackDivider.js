/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/card-body.js';
import '@htmlplus/ui/card.js';
import '@htmlplus/ui/divider.js';
import '@htmlplus/ui/stack.js';

function App() {
  return (
    <plus-stack gap="1rem">
      <plus-card elevation={5}>
        <plus-card-body>Item 1</plus-card-body>
      </plus-card>
      <plus-divider vertical></plus-divider>
      <plus-card elevation={5}>
        <plus-card-body>Item 2</plus-card-body>
      </plus-card>
      <plus-divider vertical></plus-divider>
      <plus-card elevation={5}>
        <plus-card-body>Item 3</plus-card-body>
      </plus-card>
    </plus-stack>
  );
}

const StackDivider = () => {
  return (
    <div className="ex-preview ex-stack-divider">
      <App />
    </div>
  )
};

export default StackDivider;
