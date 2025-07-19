/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/progress-bar.js';

function App() {
  return (
    <>
      <plus-progress-bar value={50} class="thin"></plus-progress-bar>
      <br />
      <plus-progress-bar value={50}></plus-progress-bar>
      <br />
      <plus-progress-bar value={50} class="thick"></plus-progress-bar>
    </>
  );
}

const ProgressBarHeight = () => {
  return (
    <div className="progress-bar-height">
      <App />
      <style>{`.progress-bar-height { plus-progress-bar.thin {  height: 2px;}plus-progress-bar.thick {  height: 1.5rem;} }`}</style>
    </div>
  )
};

export default ProgressBarHeight;
