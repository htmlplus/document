/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/icon.js';
import '@htmlplus/ui/stack.js';

function App() {
  return (
    <plus-stack gap="2rem">
      <plus-icon name="house"></plus-icon>
      <plus-icon name="house" flip="horizontal"></plus-icon>
      <plus-icon name="house" flip="vertical"></plus-icon>
      <plus-icon name="house" flip="both"></plus-icon>
    </plus-stack>
  );
}

const IconFlip = () => {
  return (
    <div className="icon-flip">
      <App />
    </div>
  )
};

export default IconFlip;
