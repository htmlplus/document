/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/faker.js';
import '@htmlplus/ui/sticky.js';

function App() {
  return (
    <div className="container">
      <plus-faker api="lorem.paragraphs"></plus-faker>
      <plus-sticky top="20px">
        <plus-faker></plus-faker>
      </plus-sticky>
      <plus-faker api="lorem.paragraphs" arguments={[20, '\n\n']}></plus-faker>
    </div>
  );
}

const StickyTop = () => {
  return (
    <div className="ex-preview ex-sticky-top dock">
      <App />
      <style>{`.ex-sticky-top .container {  height: 20rem;  overflow: auto;}.ex-sticky-top plus-faker {  display: block;  padding: 1rem;  text-align: justify;}.ex-sticky-top plus-sticky {  background-color: gold;}`}</style>
    </div>
  )
};

export default StickyTop;
