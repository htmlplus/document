/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { useEffect, useRef } from 'react';

import '@htmlplus/core/faker.js';
import '@htmlplus/core/grid-item.js';
import '@htmlplus/core/grid.js';
import '@htmlplus/core/sticky.js';

function App() {
  const plusFakerRef = useRef();
  useEffect(() => {
    plusFakerRef.current.arguments = [10, '\n\n'];
  }, []);
  return (
    <div className="container">
      <header>Header</header>
      <plus-grid>
        <plus-grid-item xs="7">
          <plus-faker api="lorem.paragraphs" ref={plusFakerRef}></plus-faker>
        </plus-grid-item>
        <plus-grid-item xs="5">
          <br />
          <plus-sticky>
            <aside>A Sticky Sidebar</aside>
          </plus-sticky>
        </plus-grid-item>
      </plus-grid>
    </div>
  );
}

const StickySidebar = () => {
  return (
    <div className="ex-sticky-sidebar dock">
      <App />
      <style>{`.ex-sticky-sidebar .container {  height: 20rem;  overflow: auto;}.ex-sticky-sidebar aside,.ex-sticky-sidebar header {  background: lightgray;  text-align: center;  padding: 1rem;}.ex-sticky-sidebar plus-faker {  display: block;  padding: 1rem;  text-align: justify;}`}</style>
    </div>
  )
};

export default StickySidebar;
