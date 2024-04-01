/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/progress-bar.js';

function App() {
  return (
    <>
      <plus-progress-bar color="lightseagreen" value={50}></plus-progress-bar>
      <br />
      <plus-progress-bar color="#FFA500" value={30}></plus-progress-bar>
      <br />
      <plus-progress-bar color="rgb(138,43,226)" value={70}></plus-progress-bar>
    </>
  );
}

const ProgressBarColor = () => {
  return (
    <div className="ex-progress-bar-color">
      <App />
    </div>
  )
};

export default ProgressBarColor;
