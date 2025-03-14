/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/dialog-body.js';
import '@htmlplus/ui/dialog-content.js';
import '@htmlplus/ui/dialog-footer.js';
import '@htmlplus/ui/dialog-header.js';
import '@htmlplus/ui/dialog-toggler.js';
import '@htmlplus/ui/dialog.js';
import '@htmlplus/ui/faker.js';
import '@htmlplus/ui/stack.js';

function App() {
  return (
    <>
      <plus-stack gap="1rem">
        <plus-dialog-toggler connector="dialog-nesting-1">Open Dialog 1</plus-dialog-toggler>
        <plus-dialog-toggler connector="dialog-nesting-2">Open Dialog 2</plus-dialog-toggler>
        <plus-dialog-toggler connector="dialog-nesting-3">Open Dialog 3</plus-dialog-toggler>
      </plus-stack>
      <plus-dialog animation connector="dialog-nesting-1" size="xl">
        <plus-dialog-content>
          <plus-dialog-header>Dialog 1</plus-dialog-header>
          <plus-dialog-body>
            <plus-faker></plus-faker>
          </plus-dialog-body>
          <plus-dialog-footer>
            <plus-dialog-toggler connector="dialog-nesting-2">Open Dialog 2</plus-dialog-toggler>
            <plus-dialog-toggler>Close</plus-dialog-toggler>
          </plus-dialog-footer>
        </plus-dialog-content>
      </plus-dialog>
      <plus-dialog animation connector="dialog-nesting-2" size="lg">
        <plus-dialog-content>
          <plus-dialog-header>Dialog 2</plus-dialog-header>
          <plus-dialog-body>
            <plus-faker></plus-faker>
          </plus-dialog-body>
          <plus-dialog-footer>
            <plus-dialog-toggler connector="dialog-nesting-3">Open Dialog 3</plus-dialog-toggler>
            <plus-dialog-toggler>Close</plus-dialog-toggler>
          </plus-dialog-footer>
        </plus-dialog-content>
      </plus-dialog>
      <plus-dialog animation connector="dialog-nesting-3" size="sm">
        <plus-dialog-content>
          <plus-dialog-header>Dialog 3</plus-dialog-header>
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

const DialogNesting = () => {
  return (
    <div className="ex-preview ex-dialog-nesting">
      <App />
    </div>
  )
};

export default DialogNesting;
