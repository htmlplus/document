/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Center, Dialog, Faker } from '@htmlplus/react';

function App() {
  return (
    <>
      <Center>
        <Dialog.Toggler connector="dialog-placement"> Open </Dialog.Toggler>
      </Center>
      <Dialog animation="fade" connector="dialog-placement" placement="center-bottom">
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

const DialogPlacement = () => {
  return (
    <div className="ex-dialog-placement">
      <App />
    </div>
  )
};

export default DialogPlacement;
