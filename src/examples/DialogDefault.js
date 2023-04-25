/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Center, Dialog, Faker } from '@htmlplus/react';
const DialogDefault = () => {
  return (
    <>
      <Center>
        <Dialog.Toggler connector="dialog-default">Open</Dialog.Toggler>
      </Center>
      <Dialog connector="dialog-default">
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

const DialogDefaultExample = () => {
  return (
    <div className="ex-dialog-default">
      <DialogDefault />
    </div>
  )
};

export default DialogDefaultExample;
