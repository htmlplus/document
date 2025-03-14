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
        <plus-card class="pink"></plus-card>
      </plus-grid-item>
      <plus-grid-item xs="12" sm="auto">
        <plus-card class="yellow"></plus-card>
      </plus-grid-item>
      <plus-grid-item xs="12" sm="auto">
        <plus-card class="blue"></plus-card>
      </plus-grid-item>
    </plus-grid>
  );
}

const CardBackgroundColor = () => {
  return (
    <div className="ex-preview ex-card-background-color">
      <App />
      <style>{`.ex-card-background-color { plus-card {  height: 12rem;  width: 12rem;  margin: auto;}plus-card.pink {  --plus-card-background-color: #ef9a9a;}plus-card.yellow {  --plus-card-background-color: #fff59d;}plus-card.blue {  --plus-card-background-color: #80cbc4;} }`}</style>
    </div>
  )
};

export default CardBackgroundColor;
