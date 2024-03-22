/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/card.js';
import '@htmlplus/ui/drawer-toggler.js';
import '@htmlplus/ui/drawer.js';
import '@htmlplus/ui/grid-item.js';
import '@htmlplus/ui/grid.js';

function App() {
  return (
    <plus-grid>
      <plus-grid-item xs="auto">
        <plus-drawer animation="fade" size="200px" connector="drawer-default">
          <plus-card> Drawer Content </plus-card>
        </plus-drawer>
      </plus-grid-item>
      <plus-grid-item xs="grow">
        <plus-card>
          <plus-drawer-toggler connector="drawer-default"> Toggle </plus-drawer-toggler>
        </plus-card>
      </plus-grid-item>
    </plus-grid>
  );
}

const DrawerDefault = () => {
  return (
    <div className="ex-drawer-default">
      <App />
      <style>{`.ex-drawer-default plus-card {  --plus-card-background-color: lightgray;  padding: 10rem 0;  text-align: center;}.ex-drawer-default plus-drawer plus-card {  --plus-card-background-color: lightblue;  margin-right: 0.5rem;}`}</style>
    </div>
  )
};

export default DrawerDefault;
