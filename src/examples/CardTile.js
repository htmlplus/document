/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/card.js';
import '@htmlplus/ui/grid-item.js';
import '@htmlplus/ui/grid.js';

function App() {
  return (
    <div className="container">
      <plus-grid justify-content="evenly" gutter="md">
        <plus-grid-item xs="12" sm="auto">
          <plus-card tile></plus-card>
        </plus-grid-item>
        <plus-grid-item xs="12" sm="auto">
          <plus-card tile outlined></plus-card>
        </plus-grid-item>
        <plus-grid-item xs="12" sm="auto">
          <plus-card tile elevation={5}></plus-card>
        </plus-grid-item>
      </plus-grid>
    </div>
  );
}

const CardTile = () => {
  return (
    <div className="ex-preview ex-card-tile dock">
      <App />
      <style>{`.ex-card-tile .container {  padding: 2rem 0;  background-color: whitesmoke;}.ex-card-tile plus-card {  height: 8rem;  width: 8rem;  margin: auto;}`}</style>
    </div>
  )
};

export default CardTile;
