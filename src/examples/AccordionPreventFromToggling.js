/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Accordion, Faker } from '@htmlplus/react';

function App() {
  function onCollapse(event) {
    if (confirm('Are you sure you want to collapse it?')) return;
    event.preventDefault();
  }
  function onExpand(event) {
    if (confirm('Are you sure you want to expand it?')) return;
    event.preventDefault();
  }
  return (
    <Accordion summary="Summary" onCollapse={onCollapse} onExpand={onExpand}>
      <Faker></Faker>
    </Accordion>
  );
}

const AccordionPreventFromToggling = () => {
  return (
    <div className="ex-accordion-prevent-from-toggling">
      <App />
    </div>
  )
};

export default AccordionPreventFromToggling;
