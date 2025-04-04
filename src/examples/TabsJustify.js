/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/tabs-bar.js';
import '@htmlplus/ui/tabs-tab.js';
import '@htmlplus/ui/tabs.js';

function App() {
  return (
    <>
      <plus-tabs>
        <plus-tabs-bar justify="start">
          <plus-tabs-tab>Tab 1</plus-tabs-tab>
          <plus-tabs-tab>Tab 2</plus-tabs-tab>
          <plus-tabs-tab>Tab 3</plus-tabs-tab>
        </plus-tabs-bar>
      </plus-tabs>
      <br />
      <plus-tabs>
        <plus-tabs-bar justify="center">
          <plus-tabs-tab>Tab 1</plus-tabs-tab>
          <plus-tabs-tab>Tab 2</plus-tabs-tab>
          <plus-tabs-tab>Tab 3</plus-tabs-tab>
        </plus-tabs-bar>
      </plus-tabs>
      <br />
      <plus-tabs>
        <plus-tabs-bar justify="end">
          <plus-tabs-tab>Tab 1</plus-tabs-tab>
          <plus-tabs-tab>Tab 2</plus-tabs-tab>
          <plus-tabs-tab>Tab 3</plus-tabs-tab>
        </plus-tabs-bar>
      </plus-tabs>
    </>
  );
}

const TabsJustify = () => {
  return (
    <div className="ex-preview ex-tabs-justify">
      <App />
    </div>
  )
};

export default TabsJustify;
