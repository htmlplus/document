/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Faker, Sticky } from '@htmlplus/react';

function App() {
  return (
    <div className="container">
      <Faker api="lorem.paragraphs"></Faker>
      <Sticky watcher>
        <Faker></Faker>
      </Sticky>
      <Faker api="lorem.paragraphs" arguments={[20, '\n\n']}></Faker>
    </div>
  );
}

const StickyStateAttributeExample = () => {
  return (
    <div className="ex-sticky-state-attribute">
      <App />
      <style>{`.ex-sticky-state-attribute .container {  height: 20rem;  overflow: auto;}.ex-sticky-state-attribute plus-faker {  display: block;  padding: 1rem;  text-align: justify;}.ex-sticky-state-attribute plus-sticky[state='normal'] {  background-color: gold;}.ex-sticky-state-attribute plus-sticky[state='stick'] {  background-color: greenyellow;}`}</style>
    </div>
  )
};

export default StickyStateAttributeExample;
