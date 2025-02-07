/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/accordion.js';
import '@htmlplus/ui/faker.js';

function App() {
  function onPlusCollapse(event) {
    if (confirm('Are you sure you want to collapse it?')) return;
    event.preventDefault();
  }
  function onPlusExpand(event) {
    if (confirm('Are you sure you want to expand it?')) return;
    event.preventDefault();
  }
  return (
    <plus-accordion summary="Summary" onPlusCollapse={onPlusCollapse} onPlusExpand={onPlusExpand}>
      <plus-faker></plus-faker>
    </plus-accordion>
  );
}

const AccordionPreventFromToggling = () => {
  return (
    <div className="ex-preview ex-accordion-prevent-from-toggling">
      <App />
    </div>
  )
};

export default AccordionPreventFromToggling;
