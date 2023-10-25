/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Accordion, Faker, Stack } from '@htmlplus/react';

function App() {
  return (
    <Accordion>
      <Stack slot="summary" justifyContent="space-between">
        <b>Summary</b>
        <button>Action</button>
      </Stack>
      <Faker></Faker>
    </Accordion>
  );
}

const AccordionCustomSummaryTemplateExample = () => {
  return (
    <div className="ex-accordion-custom-summary-template">
      <App />
      <style>{`.ex-accordion-custom-summary-template [slot='summary'] {  flex-grow: 1;  margin-inline-end: 1rem;}`}</style>
    </div>
  )
};

export default AccordionCustomSummaryTemplateExample;
