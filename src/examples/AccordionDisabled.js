/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/accordion.js';
import '@htmlplus/ui/accordions.js';
import '@htmlplus/ui/faker.js';

function App() {
  return (
    <plus-accordions>
      <plus-accordion summary="First">
        <plus-faker></plus-faker>
      </plus-accordion>
      <plus-accordion summary="Second">
        <plus-faker></plus-faker>
      </plus-accordion>
      <plus-accordion summary="Third" disabled>
        <plus-faker></plus-faker>
      </plus-accordion>
    </plus-accordions>
  );
}

const AccordionDisabled = () => {
  return (
    <div className="ex-preview ex-accordion-disabled">
      <App />
    </div>
  )
};

export default AccordionDisabled;
