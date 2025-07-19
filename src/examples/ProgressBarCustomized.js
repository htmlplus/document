/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/progress-bar.js';

function App() {
  return <plus-progress-bar value={60} buffer={80}></plus-progress-bar>;
}

const ProgressBarCustomized = () => {
  return (
    <div className="progress-bar-customized">
      <App />
      <style>{`.progress-bar-customized { plus-progress-bar {  border-radius: 1rem;  background-color: transparent;  border: solid 0.3rem transparent;  outline: solid 0.15rem gainsboro;}plus-progress-bar::part(buffer) {  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.1));}plus-progress-bar::part(indicator) {  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.1));} }`}</style>
    </div>
  )
};

export default ProgressBarCustomized;
