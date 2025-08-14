/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/card.js';
import '@htmlplus/ui/stack.js';

function App() {
  return (
    <plus-stack gap="1rem" justify="evenly" wrap>
      <plus-card className="pink"></plus-card>
      <plus-card className="yellow"></plus-card>
      <plus-card className="blue"></plus-card>
    </plus-stack>
  );
}

const CardBackgroundColor = () => {
  return (
    <div className="card-background-color">
      <App />
      <style>{`.card-background-color { plus-card {  height: 12rem;  width: 12rem;}plus-card.pink {  --plus-card-background-color: #ef9a9a;}plus-card.yellow {  --plus-card-background-color: #fff59d;}plus-card.blue {  --plus-card-background-color: #80cbc4;} }`}</style>
    </div>
  )
};

export default CardBackgroundColor;
