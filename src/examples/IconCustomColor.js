/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/icon.js';
import '@htmlplus/ui/stack.js';

function App() {
  return (
    <plus-stack gap="2rem">
      <plus-icon name="house" color="primary"></plus-icon>
      <plus-icon name="house" color="secondary"></plus-icon>
      <plus-icon name="house" color="tertiary"></plus-icon>
    </plus-stack>
  );
}

const IconCustomColor = () => {
  return (
    <div className="ex-icon-custom-color">
      <App />
      <style>{`.ex-icon-custom-color [color='primary'] {  color: #ff5449;}.ex-icon-custom-color [color='secondary'] {  color: #08dfc8;}.ex-icon-custom-color [color='tertiary'] {  color: #5f9ee9;}`}</style>
    </div>
  )
};

export default IconCustomColor;
