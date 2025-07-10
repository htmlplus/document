/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/card.js';
import '@htmlplus/ui/stack.js';

function App() {
  return (
    <plus-stack gap="1rem" justify="evenly" wrap>
      <plus-card tile></plus-card>
      <plus-card tile outlined></plus-card>
      <plus-card tile elevation={5}></plus-card>
    </plus-stack>
  );
}

const CardTile = () => {
  return (
    <div className="ex-preview ex-card-tile dock">
      <App />
      <style>{`.ex-card-tile { .container {  padding: 2rem 0;  background-color: whitesmoke;}plus-card {  height: 8rem;  width: 8rem;} }`}</style>
    </div>
  )
};

export default CardTile;
