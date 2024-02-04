/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/core/spinner.js';
import '@htmlplus/core/stack.js';

function App() {
  return (
    <plus-stack gap="2rem">
      <plus-spinner class="spinner-1"></plus-spinner>
      <plus-spinner class="spinner-2"></plus-spinner>
      <plus-spinner class="spinner-3"></plus-spinner>
      <plus-spinner class="spinner-4"></plus-spinner>
      <plus-spinner class="spinner-5"></plus-spinner>
    </plus-stack>
  );
}

const SpinnerColor = () => {
  return (
    <div className="ex-spinner-color">
      <App />
      <style>{`.ex-spinner-color .spinner-1 {  color: #08dfc8;}.ex-spinner-color .spinner-2 {  color: #ff5449;}.ex-spinner-color .spinner-3 {  color: #5f9ee9;}.ex-spinner-color .spinner-4 {  color: #ffc903;}.ex-spinner-color .spinner-5 {  color: #9073c1;}`}</style>
    </div>
  )
};

export default SpinnerColor;
