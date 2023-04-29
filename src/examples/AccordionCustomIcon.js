/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Accordion, Faker, Icon } from '@htmlplus/react';
const AccordionCustomIcon = () => {
  return (
    <Accordion summary="First">
      <Icon slot="icon-expand" name="plus"></Icon>
      <Icon slot="icon-collapse" name="dash"></Icon>
      <Faker></Faker>
    </Accordion>
  );
};

const AccordionCustomIconExample = () => {
  return (
    <div className="ex-accordion-custom-icon">
      <AccordionCustomIcon />
    </div>
  )
};

export default AccordionCustomIconExample;
