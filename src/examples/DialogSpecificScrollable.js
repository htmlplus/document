/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Center, Dialog, Faker } from '@htmlplus/react';
const DialogSpecificScrollable = () => {
  return (
    <>
      <Center>
        <Dialog.Toggler connector="dialog-specific-scrollable">
          Open
        </Dialog.Toggler>
      </Center>
      <Dialog
        animation="fade"
        connector="dialog-specific-scrollable"
        scrollable
      >
        <Dialog.Content>
          <Dialog.Header>Dialog Title</Dialog.Header>
          <Dialog.Body scrollable>
            <Faker api="lorem.paragraphs" arguments='[15, "\n\n"]'></Faker>
          </Dialog.Body>
          <Dialog.Footer>
            <Dialog.Toggler>Close</Dialog.Toggler>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog>
    </>
  );
};

const DialogSpecificScrollableExample = () => {
  return (
    <div className="ex-dialog-specific-scrollable">
      <DialogSpecificScrollable />
    </div>
  )
};

export default DialogSpecificScrollableExample;
