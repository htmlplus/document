/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { useState } from 'react';

import '@htmlplus/ui/card.js';

function App() {
  const [elevation, setElevation] = useState(24);
  function onChange(event) {
    setElevation(event.target.value);
  }
  return (
    <>
      <plus-card elevation={elevation}></plus-card>
      <br />
      <input type="range" min="1" max="24" onChange={onChange} />
    </>
  );
}

const CardElevation = () => {
  return (
    <div className="ex-preview ex-card-elevation">
      <App />
      <style>{`.ex-card-elevation { plus-card {  height: 12rem;  width: 12rem;  margin: auto;}input[type='range'] {  display: block;  width: 12rem;  margin: auto;} }`}</style>
    </div>
  )
};

export default CardElevation;
