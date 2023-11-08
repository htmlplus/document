/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { useEffect, useRef } from 'react';

import { Accordion, Faker } from '@htmlplus/react';

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
      <Accordion summary="First">
        <Faker></Faker>
      </Accordion>
      <Accordion summary="Second">
        <Faker></Faker>
      </Accordion>
      <Accordion summary="Third">
        <Faker></Faker>
      </Accordion>
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
