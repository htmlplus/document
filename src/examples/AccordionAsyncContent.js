/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { useEffect, useRef, useState } from 'react';

import '@htmlplus/ui/accordion.js';
import '@htmlplus/ui/faker.js';
import '@htmlplus/ui/progress-bar.js';

function App() {
  const accordionRef = useRef();
  const [hidden, setHidden] = useState(true);
  useEffect(() => {
    if (!accordionRef.current) return;
    function onPlusExpand(event) {
      event.preventDefault();
      setHidden(false);
      setTimeout(() => {
        setHidden(true);
        accordionRef.current.open = true;
      }, 2500);
    }
    accordionRef.current.addEventListener('PlusExpand', onPlusExpand);
    return () => {
      if (!accordionRef.current) return;
      accordionRef.current.removeEventListener('PlusExpand', onPlusExpand);
    };
  });
  return (
    <plus-accordion summary="Summary" ref={accordionRef}>
      <plus-progress-bar
        variant="indeterminate"
        slot="top"
        style={{
          height: '2px'
        }}
        hidden={hidden}
      ></plus-progress-bar>
      <plus-faker></plus-faker>
    </plus-accordion>
  );
}

const AccordionAsyncContent = () => {
  return (
    <div className="ex-accordion-async-content">
      <App />
    </div>
  )
};

export default AccordionAsyncContent;
