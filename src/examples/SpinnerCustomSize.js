/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/spinner.js';
import '@htmlplus/ui/stack.js';

function App() {
  return (
    <plus-stack gap="2rem">
      <plus-spinner size="sm"></plus-spinner>
      <plus-spinner size="md"></plus-spinner>
      <plus-spinner size="lg"></plus-spinner>
    </plus-stack>
  );
}

const SpinnerCustomSize = () => {
  return (
    <div className="ex-preview ex-spinner-custom-size">
      <App />
      <style>{`.ex-spinner-custom-size { plus-spinner[size='sm'] {  width: 24px;  height: 24px;}plus-spinner[size='md'] {  width: 48px;  height: 48px;}plus-spinner[size='lg'] {  width: 72px;  height: 72px;} }`}</style>
    </div>
  )
};

export default SpinnerCustomSize;
