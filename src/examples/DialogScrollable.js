/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Center, Dialog, Faker } from '@htmlplus/react';

function App() {
  return (
    <>
      <Center>
        <Dialog.Toggler connector="dialog-scrollable"> Open </Dialog.Toggler>
      </Center>
      <Dialog animation="fade" connector="dialog-scrollable" scrollable>
        <Dialog.Content>
          <Dialog.Header> Dialog Title </Dialog.Header>
          <Dialog.Body>
            <Faker api="lorem.paragraphs" arguments={[15, '\n\n']}></Faker>
          </Dialog.Body>
          <Dialog.Footer>
            <Dialog.Toggler> Close </Dialog.Toggler>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog>
    </>
  );
}

const DialogScrollable = () => {
  return (
    <div className="ex-dialog-scrollable">
      <App />
    </div>
  )
};

export default DialogScrollable;
