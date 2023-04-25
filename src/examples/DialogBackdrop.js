/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Center, Dialog, Faker } from '@htmlplus/react';
const DialogBackdrop = () => {
  return (
    <>
      <Center>
        <Dialog.Toggler connector="dialog-backdrop">Open</Dialog.Toggler>
      </Center>
      <Dialog animation="fade" connector="dialog-backdrop" backdrop={false}>
        <Dialog.Content>
          <Dialog.Header>Dialog Title</Dialog.Header>
          <Dialog.Body>
            <Faker></Faker>
          </Dialog.Body>
          <Dialog.Footer>
            <Dialog.Toggler>Close</Dialog.Toggler>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog>
    </>
  );
};

const DialogBackdropExample = () => {
  return (
    <div className="ex-dialog-backdrop">
      <DialogBackdrop />
    </div>
  )
};

export default DialogBackdropExample;
