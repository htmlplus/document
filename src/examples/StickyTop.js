/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
import { Faker, Sticky } from '@htmlplus/react';

function App() {
  return (
    <div className="container">
      <Faker api="lorem.paragraphs"></Faker>
      <Sticky top="20px">
        <Faker></Faker>
      </Sticky>
      <Faker api="lorem.paragraphs" arguments='[20, "\n\n"]'></Faker>
    </div>
  );
}

const StickyTopExample = () => {
  return (
    <div className="ex-sticky-top dock">
      <App />
      <style>{`.ex-sticky-top .container {  height: 20rem;  overflow: auto;}.ex-sticky-top plus-faker {  display: block;  padding: 1rem;  text-align: justify;}.ex-sticky-top plus-sticky {  background-color: gold;}`}</style>
    </div>
  );
};

export default StickyTopExample;
