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
        <plus-card class="size-1" outlined></plus-card>
      </plus-grid-item>
      <plus-grid-item xs="12" sm="auto">
        <plus-card class="size-2" outlined></plus-card>
      </plus-grid-item>
      <plus-grid-item xs="12" sm="auto">
        <plus-card class="size-3" outlined></plus-card>
      </plus-grid-item>
    </plus-grid>
  );
}

const CardBorderWidth = () => {
  return (
    <div className="ex-card-border-width">
      <App />
      <style>{`.ex-card-border-width plus-card {  height: 8rem;  width: 8rem;  margin: auto;}.ex-card-border-width plus-card.size-1 {  --plus-card-border-width: 1px;}.ex-card-border-width plus-card.size-2 {  --plus-card-border-width: 2px;}.ex-card-border-width plus-card.size-3 {  --plus-card-border-width: 3px;}`}</style>
    </div>
  )
};

export default CardBorderWidth;
