/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Faker, Sticky } from '@htmlplus/react';

function App() {
  return (
    <div className="container">
      <br />
      <Sticky watcher>
        <header slot="normal">Normal Header</header>
        <header slot="stick">Stick Header</header>
      </Sticky>
      <Faker api="lorem.paragraphs" arguments={[20, '\n\n']}></Faker>
    </div>
  );
}

const StickySlotsExample = () => {
  return (
    <div className="ex-sticky-slots">
      <App />
      <style>{`.ex-sticky-slots .container {  height: 20rem;  overflow: auto;}.ex-sticky-slots header {  background: lightgray;  text-align: center;  padding: 1rem;}.ex-sticky-slots plus-faker {  display: block;  padding: 1rem;  text-align: justify;}.ex-sticky-slots plus-sticky[state='normal'] header {  border-radius: 4px;  margin: 1rem;}`}</style>
    </div>
  )
};

export default StickySlotsExample;
