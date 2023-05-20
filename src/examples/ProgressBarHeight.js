/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { ProgressBar } from '@htmlplus/react';
const ProgressBarHeight = () => {
  return (
    <>
      <ProgressBar value="50" className="thin"></ProgressBar>
      <br />
      <ProgressBar value="50"></ProgressBar>
      <br />
      <ProgressBar value="50" className="thick"></ProgressBar>
    </>
  );
};

const ProgressBarHeightExample = () => {
  return (
    <div className="ex-progress-bar-height">
      <ProgressBarHeight />
      <style>{`.ex-progress-bar-height plus-progress-bar.thin {  height: 2px;}.ex-progress-bar-height plus-progress-bar.thick {  height: 1.5rem;}`}</style>
    </div>
  )
};

export default ProgressBarHeightExample;
