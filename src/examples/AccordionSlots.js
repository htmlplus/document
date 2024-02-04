/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/core/accordion.js';
import '@htmlplus/core/faker.js';
import '@htmlplus/core/progress-bar.js';
import '@htmlplus/core/stack.js';

function App() {
  return (
    <plus-stack align-items="stretch" gap="1rem" vertical>
      <div>
        <plus-accordion summary="Summary" open>
          <plus-progress-bar
            variant="indeterminate"
            style={{
              height: '2px'
            }}
            slot="top"
          ></plus-progress-bar>
          <plus-faker seed={0}></plus-faker>
        </plus-accordion>
      </div>
      <div>
        <plus-accordion summary="Summary" open>
          <plus-progress-bar
            variant="indeterminate"
            style={{
              height: '2px'
            }}
            slot="middle"
          ></plus-progress-bar>
          <plus-faker seed={0}></plus-faker>
        </plus-accordion>
      </div>
      <div>
        <plus-accordion summary="Summary" open>
          <plus-progress-bar
            variant="indeterminate"
            style={{
              height: '2px'
            }}
            slot="bottom"
          ></plus-progress-bar>
          <plus-faker seed={0}></plus-faker>
        </plus-accordion>
      </div>
    </plus-stack>
  );
}

const AccordionSlots = () => {
  return (
    <div className="ex-accordion-slots">
      <App />
    </div>
  )
};

export default AccordionSlots;
