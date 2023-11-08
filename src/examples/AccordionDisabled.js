/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Accordion, Faker } from '@htmlplus/react';

function App() {
  return (
    <>
      <Accordion summary="First">
        <Faker></Faker>
      </Accordion>
      <Accordion summary="Second">
        <Faker></Faker>
      </Accordion>
      <Accordion summary="Third" disabled>
        <Faker></Faker>
      </Accordion>
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
