/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { useEffect, useRef } from 'react';

import '@htmlplus/ui/accordion.js';
import '@htmlplus/ui/faker.js';

function App() {
  const accordionRef = useRef();
  useEffect(() => {
    if (!accordionRef.current) return;
    function onPlusCollapse(event) {
      if (confirm('Are you sure you want to collapse it?')) return;
      event.preventDefault();
    }
    accordionRef.current.addEventListener('PlusCollapse', onPlusCollapse);
    return () => {
      if (!accordionRef.current) return;
      accordionRef.current.removeEventListener('PlusCollapse', onPlusCollapse);
    };
  });
  useEffect(() => {
    if (!accordionRef.current) return;
    function onPlusExpand(event) {
      if (confirm('Are you sure you want to expand it?')) return;
      event.preventDefault();
    }
    accordionRef.current.addEventListener('PlusExpand', onPlusExpand);
    return () => {
      if (!accordionRef.current) return;
      accordionRef.current.removeEventListener('PlusExpand', onPlusExpand);
    };
  });
  return (
    <plus-accordion summary="Summary" ref={accordionRef}>
      <plus-faker></plus-faker>
    </plus-accordion>
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
