/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Accordion, Faker, ProgressBar, Stack } from '@htmlplus/react';

function App() {
  return (
    <Stack alignItems="stretch" gap="1rem" vertical>
      <div>
        <Accordion summary="Summary" open>
          <ProgressBar variant="indeterminate" slot="top"></ProgressBar>
          <Faker seed={0}></Faker>
        </Accordion>
      </div>
      <div>
        <Accordion summary="Summary" open>
          <ProgressBar variant="indeterminate" slot="middle"></ProgressBar>
          <Faker seed={0}></Faker>
        </Accordion>
      </div>
      <div>
        <Accordion summary="Summary" open>
          <ProgressBar variant="indeterminate" slot="bottom"></ProgressBar>
          <Faker seed={0}></Faker>
        </Accordion>
      </div>
    </Stack>
  );
}

const AccordionSlotsExample = () => {
  return (
    <div className="ex-accordion-slots">
      <App />
      <style>{`.ex-accordion-slots plus-progress-bar {  height: 2px;}`}</style>
    </div>
  )
};

export default AccordionSlotsExample;
