/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { useState } from 'react';

import '@htmlplus/core/card.js';

function App() {
  const [elevation, setElevation] = useState(12);
  function onChange(event) {
    setElevation(event.target.value);
  }
  return (
    <>
      <plus-card elevation={elevation}></plus-card>
      <br />
      <input type="range" value="12" min="1" max="24" onChange={onChange} />
    </>
  );
}

const CardElevation = () => {
  return (
    <div className="ex-card-elevation">
      <App />
      <style>{`.ex-card-elevation plus-card {  height: 12rem;  width: 12rem;  margin: auto;}.ex-card-elevation input[type='range'] {  display: block;  width: 12rem;  margin: auto;}`}</style>
    </div>
  )
};

export default CardElevation;
