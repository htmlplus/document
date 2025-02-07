/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/faker.js';
import '@htmlplus/ui/sticky.js';

function App() {
  return (
    <div className="container">
      <br />
      <plus-sticky watcher>
        <header slot="normal">Normal Header</header>
        <header slot="stick">Stick Header</header>
      </plus-sticky>
      <plus-faker api="lorem.paragraphs" arguments={[20, '\n\n']}></plus-faker>
    </div>
  );
}

const StickySlots = () => {
  return (
    <div className="ex-preview ex-sticky-slots dock">
      <App />
      <style>{`.ex-sticky-slots .container {  height: 20rem;  overflow: auto;}.ex-sticky-slots header {  background: lightgray;  text-align: center;  padding: 1rem;}.ex-sticky-slots plus-faker {  display: block;  padding: 1rem;  text-align: justify;}.ex-sticky-slots plus-sticky[state='normal'] header {  border-radius: 4px;  margin: 1rem;}`}</style>
    </div>
  )
};

export default StickySlots;
