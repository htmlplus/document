/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/core/accordion.js';
import '@htmlplus/core/faker.js';
import '@htmlplus/core/stack.js';

function App() {
  return (
    <plus-accordion>
      <plus-stack slot="summary" justify-content="space-between">
        <b>Summary</b>
        <button>Action</button>
      </plus-stack>
      <plus-faker></plus-faker>
    </plus-accordion>
  );
}

const AccordionCustomSummaryTemplate = () => {
  return (
    <div className="ex-accordion-custom-summary-template">
      <App />
      <style>{`.ex-accordion-custom-summary-template [slot='summary'] {  flex-grow: 1;  margin-inline-end: 1rem;}`}</style>
    </div>
  )
};

export default AccordionCustomSummaryTemplate;
