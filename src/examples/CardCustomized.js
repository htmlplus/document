/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/card.js';

function App() {
  return <plus-card elevation={12} outlined></plus-card>;
}

const CardCustomized = () => {
  return (
    <div className="ex-preview ex-card-customized">
      <App />
      <style>{`.ex-card-customized { plus-card {  --plus-card-border-radius: 3rem 0;  --plus-card-border-width: 2px;  --plus-card-border-color: darkgray;  --plus-card-background-color: lightgray;  height: 12rem;  width: 12rem;  margin: auto;} }`}</style>
    </div>
  )
};

export default CardCustomized;
