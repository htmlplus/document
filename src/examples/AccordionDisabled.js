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

const AccordionDisabledExample = () => {
  return (
    <div className="ex-accordion-disabled">
      <App />
    </div>
  )
};

export default AccordionDisabledExample;
