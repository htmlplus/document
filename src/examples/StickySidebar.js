/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/faker.js';
import '@htmlplus/ui/grid-item.js';
import '@htmlplus/ui/grid.js';
import '@htmlplus/ui/sticky.js';

function App() {
  return (
    <div className="container">
      <header>Header</header>
      <plus-grid>
        <plus-grid-item xs="7">
          <plus-faker api="lorem.paragraphs" arguments={[10, '\n\n']}></plus-faker>
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
