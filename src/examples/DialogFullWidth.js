/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Center, Dialog, Faker } from '@htmlplus/react';

function App() {
  return (
    <>
      <Center>
        <Dialog.Toggler connector="dialog-full-width"> Open </Dialog.Toggler>
      </Center>
      <Dialog animation="fade" connector="dialog-full-width" fullWidth>
        <Dialog.Content>
          <Dialog.Body>
            <Faker></Faker>
          </Dialog.Body>
        </Dialog.Content>
      </Dialog>
    </>
  );
}

const DialogFullWidth = () => {
  return (
    <div className="ex-dialog-full-width">
      <App />
    </div>
  )
};

export default DialogFullWidth;
