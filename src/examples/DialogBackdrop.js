/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Center, Dialog, Faker } from '@htmlplus/react';

function App() {
  return (
    <>
      <Center>
        <Dialog.Toggler connector="dialog-backdrop"> Open </Dialog.Toggler>
      </Center>
      <Dialog animation="fade" connector="dialog-backdrop" backdrop={false}>
        <Dialog.Content>
          <Dialog.Header> Dialog Title </Dialog.Header>
          <Dialog.Body>
            <Faker></Faker>
          </Dialog.Body>
          <Dialog.Footer>
            <Dialog.Toggler> Close </Dialog.Toggler>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog>
    </>
  );
}

const DialogBackdropExample = () => {
  return (
    <div className="ex-dialog-backdrop">
      <App />
    </div>
  )
};

export default DialogBackdropExample;
