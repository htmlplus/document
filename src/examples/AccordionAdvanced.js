/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Accordion, Faker, Stack } from '@htmlplus/react';

function App() {
  return (
    <Accordion>
      <Stack slot="summary" justifyContent="space-between">
        <span>Summary</span>
        <button>Action</button>
      </Stack>
      <Faker></Faker>
    </Accordion>
  );
}

const AccordionAdvancedExample = () => {
  return (
    <div className="ex-accordion-advanced">
      <App />
      <style>{`.ex-accordion-advanced [slot='summary'] {  flex-grow: 1;  margin-right: 1rem;}`}</style>
    </div>
  )
};

export default AccordionAdvancedExample;
