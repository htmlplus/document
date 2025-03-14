/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/center.js';
import '@htmlplus/ui/dialog-body.js';
import '@htmlplus/ui/dialog-content.js';
import '@htmlplus/ui/dialog-footer.js';
import '@htmlplus/ui/dialog-header.js';
import '@htmlplus/ui/dialog-toggler.js';
import '@htmlplus/ui/dialog.js';
import '@htmlplus/ui/faker.js';

function App() {
  return (
    <>
      <plus-center>
        <plus-dialog-toggler connector="dialog-specific-scrollable">Open</plus-dialog-toggler>
      </plus-center>
      <plus-dialog animation connector="dialog-specific-scrollable" scrollable>
        <plus-dialog-content>
          <plus-dialog-header>Dialog Title</plus-dialog-header>
          <plus-dialog-body scrollable>
            <plus-faker api="lorem.paragraphs" arguments={[15, '\n\n']}></plus-faker>
          </plus-dialog-body>
          <plus-dialog-footer>
            <plus-dialog-toggler>Close</plus-dialog-toggler>
          </plus-dialog-footer>
        </plus-dialog-content>
      </plus-dialog>
    </>
  );
}

const DialogSpecificScrollable = () => {
  return (
    <div className="ex-preview ex-dialog-specific-scrollable">
      <App />
    </div>
  )
};

export default DialogSpecificScrollable;
