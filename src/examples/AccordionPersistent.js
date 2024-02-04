/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { useEffect, useRef } from 'react';

import '@htmlplus/core/accordion.js';
import '@htmlplus/core/faker.js';

function App() {
  const accordionsRef = useRef();
  useEffect(() => {
    Array.from(accordionsRef.current.children).forEach((accordion, index, accordions) => {
      accordion.addEventListener('plus-expand', (event) => {
        accordions.forEach((accordion) => {
          accordion.open = event.target == accordion;
        });
      });
    });
  }, []);
  return (
    <div ref={accordionsRef}>
      <plus-accordion summary="First">
        <plus-faker></plus-faker>
      </plus-accordion>
      <plus-accordion summary="Second">
        <plus-faker></plus-faker>
      </plus-accordion>
      <plus-accordion summary="Third">
        <plus-faker></plus-faker>
      </plus-accordion>
    </div>
  );
}

const AccordionPersistent = () => {
  return (
    <div className="ex-accordion-persistent">
      <App />
    </div>
  )
};

export default AccordionPersistent;
