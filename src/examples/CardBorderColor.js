/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/card.js';
import '@htmlplus/ui/grid-item.js';
import '@htmlplus/ui/grid.js';

function App() {
  return (
    <plus-grid justify-content="evenly" gutter="md">
      <plus-grid-item xs="12" sm="auto">
        <plus-card class="pink" outlined></plus-card>
      </plus-grid-item>
      <plus-grid-item xs="12" sm="auto">
        <plus-card class="yellow" outlined></plus-card>
      </plus-grid-item>
      <plus-grid-item xs="12" sm="auto">
        <plus-card class="blue" outlined></plus-card>
      </plus-grid-item>
    </plus-grid>
  );
}

const CardBorderColor = () => {
  return (
    <div className="ex-card-border-color">
      <App />
      <style>{`.ex-card-border-color plus-card {  height: 8rem;  width: 8rem;  margin: auto;}.ex-card-border-color plus-card.pink {  --plus-card-border-color: #ef9a9a;}.ex-card-border-color plus-card.yellow {  --plus-card-border-color: #fff59d;}.ex-card-border-color plus-card.blue {  --plus-card-border-color: #80cbc4;}`}</style>
    </div>
  )
};

export default CardBorderColor;
