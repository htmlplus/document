/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/faker.js';
import '@htmlplus/ui/sticky.js';

function App() {
  return (
    <div className="container">
      <plus-faker api="lorem.paragraphs"></plus-faker>
      <plus-sticky>
        <plus-faker></plus-faker>
      </plus-sticky>
      <plus-faker api="lorem.paragraphs" arguments={[20, '\n\n']}></plus-faker>
    </div>
  );
}

const StickyDefault = () => {
  return (
    <div className="ex-sticky-default dock">
      <App />
      <style>{`.ex-sticky-default .container {  height: 20rem;  overflow: auto;}.ex-sticky-default plus-faker {  display: block;  padding: 1rem;  text-align: justify;}.ex-sticky-default plus-sticky {  background-color: gold;}`}</style>
    </div>
  )
};

export default StickyDefault;
