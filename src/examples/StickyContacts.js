/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/sticky.js';

function App() {
  return (
    <div className="container">
      <plus-sticky>A</plus-sticky>
      <p>A</p>
      <plus-sticky>B</plus-sticky>
      <p>B</p>
      <plus-sticky>C</plus-sticky>
      <p>C</p>
      <plus-sticky>D</plus-sticky>
      <p>D</p>
      <plus-sticky>E</plus-sticky>
      <p>E</p>
      <plus-sticky>F</plus-sticky>
      <p>F</p>
    </div>
  );
}

const StickyContacts = () => {
  return (
    <div className="ex-preview ex-sticky-contacts dock">
      <App />
      <style>{`.ex-sticky-contacts .container {  height: 20rem;  overflow: auto;}.ex-sticky-contacts p {  color: lightgray;  font-size: 10rem;  line-height: 2;  text-align: center;}.ex-sticky-contacts plus-sticky {  background-color: lightgray;  padding: 0.5rem 1rem;}`}</style>
    </div>
  )
};

export default StickyContacts;
