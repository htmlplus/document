/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Accordion, Faker } from '@htmlplus/react';
const AccordionAdvanced = () => {
  return (
    <Accordion>
      <div slot="summary">
        <span>Summary</span>
        <button>Action</button>
      </div>
      <Faker></Faker>
    </Accordion>
  );
};

const AccordionAdvancedExample = () => {
  return (
    <div className="ex-accordion-advanced">
      <AccordionAdvanced />
      <style>{`.ex-accordion-advanced [slot='summary'] {  display: flex;  align-items: center;  justify-content: space-between;  flex-grow: 1;  margin-right: 1rem;}`}</style>
    </div>
  )
};

export default AccordionAdvancedExample;
