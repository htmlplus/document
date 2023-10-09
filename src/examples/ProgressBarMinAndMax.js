/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { ProgressBar } from '@htmlplus/react';

function App() {
  return (
    <>
      <ProgressBar min={0} max={1} value={0.25}></ProgressBar>
      <br />
      <ProgressBar min={-10} max={10} value={0}></ProgressBar>
    </>
  );
}

const ProgressBarMinAndMaxExample = () => {
  return (
    <div className="ex-progress-bar-min-and-max">
      <App />
    </div>
  )
};

export default ProgressBarMinAndMaxExample;
