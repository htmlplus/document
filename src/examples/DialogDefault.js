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
        <plus-dialog-toggler connector="dialog-default">Open</plus-dialog-toggler>
      </plus-center>
      <plus-dialog connector="dialog-default">
        <plus-dialog-content>
          <plus-dialog-header>Dialog Title</plus-dialog-header>
          <plus-dialog-body>
            <plus-faker></plus-faker>
          </plus-dialog-body>
          <plus-dialog-footer>
            <plus-dialog-toggler>Close</plus-dialog-toggler>
          </plus-dialog-footer>
        </plus-dialog-content>
      </plus-dialog>
    </>
  );
}

const DialogDefault = () => {
  return (
    <div className="ex-preview ex-dialog-default">
      <App />
    </div>
  )
};

export default DialogDefault;
