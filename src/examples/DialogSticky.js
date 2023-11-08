/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Center, Dialog, Faker } from '@htmlplus/react';

function App() {
  return (
    <>
      <Center>
        <Dialog.Toggler connector="dialog-sticky"> Open </Dialog.Toggler>
      </Center>
      <Dialog animation="fade" connector="dialog-sticky" fullWidth sticky>
        <Dialog.Content>
          <Dialog.Body>
            <Faker></Faker>
          </Dialog.Body>
        </Dialog.Content>
      </Dialog>
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
