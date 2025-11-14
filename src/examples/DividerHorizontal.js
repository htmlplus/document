/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/divider.js';
import '@htmlplus/ui/faker.js';

function App() {
  return (
    <>
      <plus-faker></plus-faker>
      <plus-divider orientation="horizontal">OR</plus-divider>
      <plus-faker></plus-faker>
    </>
  );
}

const DividerHorizontal = () => {
  return (
    <div className="divider-horizontal">
      <App />
      <style>{`.divider-horizontal { plus-divider {  margin: 1rem 0;} }`}</style>
    </div>
  )
};

export default DividerHorizontal;
