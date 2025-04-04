/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/aspect-ratio.js';
import '@htmlplus/ui/card-body.js';
import '@htmlplus/ui/card.js';

function App() {
  return (
    <plus-aspect-ratio value="16/9">
      <plus-card tile>
        <plus-card-body>
          This box will always be 16/9 (unless you put more stuff in it)
        </plus-card-body>
      </plus-card>
    </plus-aspect-ratio>
  );
}

const AspectRatioDefault = () => {
  return (
    <div className="ex-preview ex-aspect-ratio-default">
      <App />
      <style>{`.ex-aspect-ratio-default { plus-card {  --plus-card-background-color: lightgray;} }`}</style>
    </div>
  )
};

export default AspectRatioDefault;
