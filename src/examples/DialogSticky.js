/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/core/center.js';
import '@htmlplus/core/dialog-body.js';
import '@htmlplus/core/dialog-content.js';
import '@htmlplus/core/dialog-toggler.js';
import '@htmlplus/core/dialog.js';
import '@htmlplus/core/faker.js';

function App() {
  return (
    <>
      <plus-center>
        <plus-dialog-toggler connector="dialog-sticky"> Open </plus-dialog-toggler>
      </plus-center>
      <plus-dialog animation="fade" connector="dialog-sticky" full-width sticky>
        <plus-dialog-content>
          <plus-dialog-body>
            <plus-faker></plus-faker>
          </plus-dialog-body>
        </plus-dialog-content>
      </plus-dialog>
    </>
  );
}

const DialogSticky = () => {
  return (
    <div className="ex-dialog-sticky">
      <App />
    </div>
  )
};

export default DialogSticky;
