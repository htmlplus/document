/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/core/divider.js';
import '@htmlplus/core/faker.js';

function App() {
  return (
    <>
      <plus-faker></plus-faker>
      <plus-divider>OR</plus-divider>
      <plus-faker></plus-faker>
    </>
  );
}

const DividerCustomize = () => {
  return (
    <div className="ex-divider-customize">
      <App />
      <style>{`.ex-divider-customize plus-divider {  gap: 1rem;  color: rgb(238, 110, 115);  margin: 1rem 0;}.ex-divider-customize plus-divider::part(line) {  border-color: rgba(238, 110, 115, 0.25);}`}</style>
    </div>
  )
};

export default DividerCustomize;
