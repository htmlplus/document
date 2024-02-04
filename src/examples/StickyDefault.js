/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { useEffect, useRef } from 'react';

import '@htmlplus/core/faker.js';
import '@htmlplus/core/sticky.js';

function App() {
  const plusFakerRef = useRef();
  useEffect(() => {
    plusFakerRef.current.arguments = [20, '\n\n'];
  }, []);
  return (
    <div className="container">
      <plus-faker api="lorem.paragraphs"></plus-faker>
      <plus-sticky>
        <plus-faker></plus-faker>
      </plus-sticky>
      <plus-faker api="lorem.paragraphs" ref={plusFakerRef}></plus-faker>
    </div>
  );
}

const StickyDefault = () => {
  return (
    <div className="ex-sticky-default dock">
      <App />
      <style>{`.ex-sticky-default .container {  height: 20rem;  overflow: auto;}.ex-sticky-default plus-faker {  display: block;  padding: 1rem;  text-align: justify;}.ex-sticky-default plus-sticky {  background-color: gold;}`}</style>
    </div>
  )
};

export default StickyDefault;
