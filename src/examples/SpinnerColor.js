/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/spinner.js';
import '@htmlplus/ui/stack.js';

function App() {
  return (
    <plus-stack gap="2rem">
      <plus-spinner className="spinner-1"></plus-spinner>
      <plus-spinner className="spinner-2"></plus-spinner>
      <plus-spinner className="spinner-3"></plus-spinner>
      <plus-spinner className="spinner-4"></plus-spinner>
      <plus-spinner className="spinner-5"></plus-spinner>
    </plus-stack>
  );
}

const SpinnerColor = () => {
  return (
    <div className="spinner-color">
      <App />
      <style>{`.spinner-color { .spinner-1 {  color: #08dfc8;}.spinner-2 {  color: #ff5449;}.spinner-3 {  color: #5f9ee9;}.spinner-4 {  color: #ffc903;}.spinner-5 {  color: #9073c1;} }`}</style>
    </div>
  )
};

export default SpinnerColor;
