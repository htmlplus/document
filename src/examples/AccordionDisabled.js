/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Accordion, Faker } from '@htmlplus/react';
const AccordionDisabled = () => {
  return (
    <div>
      <Accordion summary="First">
        <Faker></Faker>
      </Accordion>
      <Accordion summary="Second">
        <Faker></Faker>
      </Accordion>
      <Accordion summary="Third" disabled>
        <Faker></Faker>
      </Accordion>
    </div>
  );
};

const AccordionDisabledExample = () => {
  return (
    <div className="ex-accordion-disabled">
      <AccordionDisabled />
    </div>
  )
};

export default AccordionDisabledExample;
