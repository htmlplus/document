/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/faker.js';
import '@htmlplus/ui/sticky.js';

function App() {
  return (
    <div className="container">
      <plus-faker api="lorem.paragraphs"></plus-faker>
      <plus-sticky watcher>
        <plus-faker></plus-faker>
      </plus-sticky>
      <plus-faker api="lorem.paragraphs" arguments={[20, '\n\n']}></plus-faker>
    </div>
  );
}

const StickyStateAttribute = () => {
  return (
    <div className="ex-sticky-state-attribute dock">
      <App />
      <style>{`.ex-sticky-state-attribute .container {  height: 20rem;  overflow: auto;}.ex-sticky-state-attribute plus-faker {  display: block;  padding: 1rem;  text-align: justify;}.ex-sticky-state-attribute plus-sticky[state='normal'] {  background-color: gold;}.ex-sticky-state-attribute plus-sticky[state='stick'] {  background-color: greenyellow;}`}</style>
    </div>
  )
};

export default StickyStateAttribute;
