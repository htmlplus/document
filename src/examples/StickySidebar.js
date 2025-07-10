/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/faker.js';
import '@htmlplus/ui/sticky.js';

function App() {
  return (
    <div className="container">
      <header>Header</header>
      <main>
        <plus-faker api="lorem.paragraphs" arguments={[10, '\n\n']}></plus-faker>
      </main>
      <aside>
        <plus-sticky>A Sticky Sidebar</plus-sticky>
      </aside>
    </div>
  );
}

const StickySidebar = () => {
  return (
    <div className="ex-preview ex-sticky-sidebar dock">
      <App />
      <style>{`.ex-sticky-sidebar { * {  box-sizing: border-box;}.container {  height: 20rem;  overflow: auto;  display: flex;  flex-wrap: wrap;}header,plus-sticky {  background: lightgray;  text-align: center;  padding: 1rem;}header {  flex: 0 0 100%;}main {  flex: 0 0 60%;  padding: 1rem;  text-align: justify;}aside {  flex: 0 0 40%;  margin-top: 1rem;} }`}</style>
    </div>
  )
};

export default StickySidebar;
