/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Center, Dialog, Faker } from '@htmlplus/react';
const DialogPersistent = () => {
  return (
    <>
      <Center>
        <Dialog.Toggler connector="dialog-persistent">Open</Dialog.Toggler>
      </Center>
      <Dialog animation="fade" connector="dialog-persistent" persistent>
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

const DialogPersistentExample = () => {
  return (
    <div className="ex-dialog-persistent">
      <DialogPersistent />
    </div>
  )
};

export default DialogPersistentExample;
