/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/aspect-ratio.js';
import '@htmlplus/ui/card-body.js';
import '@htmlplus/ui/card.js';
import '@htmlplus/ui/center.js';

function App() {
  return (
    <plus-center>
      <plus-card outlined>
        <plus-card-body>
          <plus-aspect-ratio value="16/9">
            <div className="placeholder"></div>
          </plus-aspect-ratio>
          <h3>Title</h3>
          <p>Description of the card.</p>
        </plus-card-body>
      </plus-card>
    </plus-center>
  );
}

const AspectRatioCard = () => {
  return (
    <div className="aspect-ratio-card">
      <App />
      <style>{`.aspect-ratio-card { plus-card {  width: 300px;}.placeholder {  background-color: lightgray;  border-radius: 4px;} }`}</style>
    </div>
  )
};

export default AspectRatioCard;
