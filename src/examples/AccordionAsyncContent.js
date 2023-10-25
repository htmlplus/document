/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { useRef, useState } from 'react';

import { Accordion, Faker, ProgressBar } from '@htmlplus/react';

function App() {
  const accordionRef = useRef();
  const [hidden, setHidden] = useState(true);
  function onExpand(event) {
    event.preventDefault();
    setHidden(false);
    setTimeout(() => {
      setHidden(true);
      accordionRef.current.open = true;
    }, 2500);
  }
  return (
    <Accordion summary="Summary" onExpand={onExpand} ref={accordionRef}>
      <ProgressBar variant="indeterminate" slot="top" hidden={hidden}></ProgressBar>
      <Faker></Faker>
    </Accordion>
  );
}

const AccordionAsyncContentExample = () => {
  return (
    <div className="ex-accordion-async-content">
      <App />
      <style>{`.ex-accordion-async-content plus-progress-bar {  height: 2px;}`}</style>
    </div>
  )
};

export default AccordionAsyncContentExample;
