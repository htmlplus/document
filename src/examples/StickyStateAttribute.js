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
    <div className="sticky-state-attribute">
      <App />
      <style>{`.sticky-state-attribute { .container {  height: 20rem;  overflow: auto;}plus-faker {  display: block;  padding: 1rem;  text-align: justify;}plus-sticky[state='normal'] {  background-color: gold;}plus-sticky[state='stick'] {  background-color: greenyellow;} }`}</style>
    </div>
  )
};

export default StickyStateAttribute;
