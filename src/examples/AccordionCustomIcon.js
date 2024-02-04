/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/core/accordion.js';
import '@htmlplus/core/faker.js';
import '@htmlplus/core/icon.js';

function App() {
  return (
    <plus-accordion summary="First">
      <plus-icon slot="icon-expand" name="plus"></plus-icon>
      <plus-icon slot="icon-collapse" name="dash"></plus-icon>
      <plus-faker></plus-faker>
    </plus-accordion>
  );
}

const AccordionCustomIcon = () => {
  return (
    <div className="ex-accordion-custom-icon">
      <App />
    </div>
  )
};

export default AccordionCustomIcon;
