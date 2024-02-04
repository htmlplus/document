/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/core/accordion.js';
import '@htmlplus/core/faker.js';

function App() {
  return (
    <>
      <plus-accordion summary="First">
        <plus-faker></plus-faker>
      </plus-accordion>
      <plus-accordion summary="Second">
        <plus-faker></plus-faker>
      </plus-accordion>
      <plus-accordion summary="Third" disabled>
        <plus-faker></plus-faker>
      </plus-accordion>
    </>
  );
}

const AccordionDisabled = () => {
  return (
    <div className="ex-accordion-disabled">
      <App />
    </div>
  )
};

export default AccordionDisabled;
