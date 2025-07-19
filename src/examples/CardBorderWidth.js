/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/card.js';
import '@htmlplus/ui/stack.js';

function App() {
  return (
    <plus-stack gap="1rem" justify="evenly" wrap>
      <plus-card class="size-1" outlined></plus-card>
      <plus-card class="size-2" outlined></plus-card>
      <plus-card class="size-3" outlined></plus-card>
    </plus-stack>
  );
}

const CardBorderWidth = () => {
  return (
    <div className="card-border-width">
      <App />
      <style>{`.card-border-width { plus-card {  height: 8rem;  width: 8rem;}plus-card.size-1 {  --plus-card-border-width: 1px;}plus-card.size-2 {  --plus-card-border-width: 2px;}plus-card.size-3 {  --plus-card-border-width: 3px;} }`}</style>
    </div>
  )
};

export default CardBorderWidth;
