/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Center, Dialog, Faker } from '@htmlplus/react';
const DialogSticky = () => {
  return (
    <>
      <Center>
        <Dialog.Toggler connector="dialog-sticky">Open</Dialog.Toggler>
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
};

const DialogStickyExample = () => {
  return (
    <div className="ex-dialog-sticky">
      <DialogSticky />
    </div>
  )
};

export default DialogStickyExample;
