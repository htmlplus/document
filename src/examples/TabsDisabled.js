/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/faker.js';
import '@htmlplus/ui/tabs-bar.js';
import '@htmlplus/ui/tabs-panel.js';
import '@htmlplus/ui/tabs-panels.js';
import '@htmlplus/ui/tabs-tab.js';
import '@htmlplus/ui/tabs.js';

function App() {
  return (
    <plus-tabs value="tab-1">
      <plus-tabs-bar>
        <plus-tabs-tab value="tab-1">Tab 1</plus-tabs-tab>
        <plus-tabs-tab value="tab-2" disabled>
          Tab 2
        </plus-tabs-tab>
        <plus-tabs-tab value="tab-3">Tab 3</plus-tabs-tab>
      </plus-tabs-bar>
      <plus-tabs-panels>
        <plus-tabs-panel value="tab-1">
          <b>Tab One</b>
          <br />
          <plus-faker></plus-faker>
        </plus-tabs-panel>
        <plus-tabs-panel value="tab-2">
          <b>Tab Two</b>
          <br />
          <plus-faker></plus-faker>
        </plus-tabs-panel>
        <plus-tabs-panel value="tab-3">
          <b>Tab Three</b>
          <br />
          <plus-faker></plus-faker>
        </plus-tabs-panel>
      </plus-tabs-panels>
    </plus-tabs>
  );
}

const TabsDisabled = () => {
  return (
    <div className="ex-preview ex-tabs-disabled">
      <App />
    </div>
  )
};

export default TabsDisabled;
