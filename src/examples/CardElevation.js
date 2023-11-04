/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { useState } from 'react';

import { Card } from '@htmlplus/react';

function App() {
  const [elevation, setElevation] = useState(12);
  function onChange(event) {
    setElevation(event.target.value);
  }
  return (
    <>
      <Card elevation={elevation}></Card>
      <br />
      <input type="range" value={elevation} min="1" max="24" onChange={onChange} />
    </>
  );
}

const CardElevationExample = () => {
  return (
    <div className="ex-card-elevation">
      <App />
      <style>{`.ex-card-elevation plus-card {  height: 12rem;  width: 12rem;  margin: auto;}.ex-card-elevation input[type='range'] {  display: block;  width: 12rem;  margin: auto;}`}</style>
    </div>
  );
};

export default CardElevationExample;
