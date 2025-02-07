/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/progress-bar.js';

function App() {
  return (
    <>
      <plus-progress-bar value={50} color="primary"></plus-progress-bar>
      <br />
      <plus-progress-bar value={30} color="secondary"></plus-progress-bar>
      <br />
      <plus-progress-bar value={70} color="tertiary"></plus-progress-bar>
    </>
  );
}

const ProgressBarCustomColor = () => {
  return (
    <div className="ex-preview ex-progress-bar-custom-color">
      <App />
      <style>{`.ex-progress-bar-custom-color plus-progress-bar[color='primary'] {  --plus-progress-bar-indicator-background-color: #00bfff;}.ex-progress-bar-custom-color plus-progress-bar[color='secondary'] {  --plus-progress-bar-indicator-background-color: #7cfc00;}.ex-progress-bar-custom-color plus-progress-bar[color='tertiary'] {  --plus-progress-bar-indicator-background-color: #ff1493;}`}</style>
    </div>
  )
};

export default ProgressBarCustomColor;
