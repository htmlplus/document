/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { useEffect, useRef } from 'react';

import '@htmlplus/core/faker.js';

function App() {
  const plusFakerRef = useRef();
  useEffect(() => {
    plusFakerRef.current.arguments = [5, '\n\n'];
  }, []);
  return <plus-faker api="lorem.paragraphs" ref={plusFakerRef}></plus-faker>;
}

const FakerArguments = () => {
  return (
    <div className="ex-faker-arguments">
      <App />
    </div>
  )
};

export default FakerArguments;
