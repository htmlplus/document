/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/progress-bar.js';

function App() {
  return (
    <>
      <plus-progress-bar min={0} max={1} value={0.25}></plus-progress-bar>
      <br />
      <plus-progress-bar min={-10} max={10} value={0}></plus-progress-bar>
    </>
  );
}

const ProgressBarMinAndMax = () => {
  return (
    <div className="ex-preview ex-progress-bar-min-and-max">
      <App />
    </div>
  )
};

export default ProgressBarMinAndMax;
