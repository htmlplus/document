/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/core/divider.js';
import '@htmlplus/core/faker.js';

function App() {
  return (
    <>
      <plus-divider>
        <span>
          <plus-icon name="tag"></plus-icon>
          &nbsp; Description
        </span>
      </plus-divider>
      <plus-faker></plus-faker>
    </>
  );
}

const DividerCustomized = () => {
  return (
    <div className="ex-divider-customized">
      <App />
      <style>{`.ex-divider-customized plus-divider {  gap: 1rem;  color: rgb(238, 110, 115);  margin-bottom: 1rem;}.ex-divider-customized plus-divider::part(line) {  border-color: rgba(238, 110, 115, 0.25);}`}</style>
    </div>
  )
};

export default DividerCustomized;
