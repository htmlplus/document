/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/core/card.js';
import '@htmlplus/core/divider.js';

function App() {
  return (
    <plus-card elevation={10}>
      Item 1<plus-divider></plus-divider>
      Item 2<plus-divider></plus-divider>
      Item 3<plus-divider></plus-divider>
      Item 4<plus-divider></plus-divider>
      Item 5
    </plus-card>
  );
}

const DividerCard = () => {
  return (
    <div className="ex-divider-card">
      <App />
      <style>{`.ex-divider-card plus-card {  padding: 0 1rem;  line-height: 3rem;}`}</style>
    </div>
  )
};

export default DividerCard;
