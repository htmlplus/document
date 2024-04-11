/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/accordion.js';
import '@htmlplus/ui/faker.js';
import '@htmlplus/ui/progress-bar.js';
import '@htmlplus/ui/stack.js';

function App() {
  return (
    <>
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
      <br />
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
      <br />
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
    </>
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
