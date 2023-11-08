/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Center, Dialog, Faker } from '@htmlplus/react';

function App() {
  return (
    <>
      <Center>
        <Dialog.Toggler connector="dialog-full-height"> Open </Dialog.Toggler>
      </Center>
      <Dialog animation="fade" connector="dialog-full-height" placement="center" fullHeight>
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

const DialogFullHeight = () => {
  return (
    <div className="ex-dialog-full-height">
      <App />
    </div>
  )
};

export default DialogFullHeight;
