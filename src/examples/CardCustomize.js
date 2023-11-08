/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Card } from '@htmlplus/react';

function App() {
  return <Card elevation={12} outlined></Card>;
}

const CardCustomize = () => {
  return (
    <div className="ex-card-customize">
      <App />
      <style>{`.ex-card-customize plus-card {  --plus-card-border-radius: 3rem 0;  --plus-card-border-width: 2px;  --plus-card-border-color: darkgray;  --plus-card-background-color: lightgray;  height: 12rem;  width: 12rem;  margin: auto;}`}</style>
    </div>
  )
};

export default CardCustomize;
