/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/accordion.js';
import '@htmlplus/ui/accordions.js';
import '@htmlplus/ui/faker.js';

function App() {
  return (
    <plus-accordions persistent>
      <plus-accordion summary="First">
        <plus-faker></plus-faker>
      </plus-accordion>
      <plus-accordion summary="Second">
        <plus-faker></plus-faker>
      </plus-accordion>
      <plus-accordion summary="Third">
        <plus-faker></plus-faker>
      </plus-accordion>
    </plus-accordions>
  );
}

const AccordionPersistent = () => {
  return (
    <div className="accordion-persistent">
      <App />
    </div>
  )
};

export default AccordionPersistent;
