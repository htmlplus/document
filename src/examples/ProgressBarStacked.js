/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/progress-bar-stack.js';
import '@htmlplus/ui/progress-bar.js';

function App() {
  return (
    <plus-progress-bar-stack>
      <plus-progress-bar color="#32CD32" value={50}></plus-progress-bar>
      <plus-progress-bar color="#FFA500" value={25}></plus-progress-bar>
      <plus-progress-bar color="#FF0000" value={10}></plus-progress-bar>
    </plus-progress-bar-stack>
  );
}

const ProgressBarStacked = () => {
  return (
    <div className="ex-preview ex-progress-bar-stacked">
      <App />
    </div>
  )
};

export default ProgressBarStacked;
