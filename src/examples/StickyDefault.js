/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
import { Faker, Sticky } from '@htmlplus/react';

function App() {
  return (
    <div className="container">
      <Faker api="lorem.paragraphs"></Faker>
      <Sticky>
        <Faker></Faker>
      </Sticky>
      <Faker api="lorem.paragraphs" arguments='[20, "\n\n"]'></Faker>
    </div>
  );
}

const StickyDefaultExample = () => {
  return (
    <div className="ex-sticky-default dock">
      <App />
      <style>{`.ex-sticky-default .container {  height: 20rem;  overflow: auto;}.ex-sticky-default plus-faker {  display: block;  padding: 1rem;  text-align: justify;}.ex-sticky-default plus-sticky {  background-color: gold;}`}</style>
    </div>
  );
};

export default StickyDefaultExample;
