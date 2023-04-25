/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Center, Signature, Stack } from '@htmlplus/react';
const SignatureSave = () => {
  const save = (background) => {
    const image = new Image();
    image.src = window.signature3.toDataURL('image/svg+xml', background);
    const tab = window.open('', '_blank');
    setTimeout(() => {
      tab.document.write(image.outerHTML);
    }, 250);
  };
  return (
    <>
      <Center>
        <Signature id="signature3" backgroundColor="lightgray"></Signature>
      </Center>
      <br />
      <Stack gap="1rem">
        <button onClick={() => save(true)}>Save With Background</button>
        <button onClick={() => save(false)}>Save Without Background</button>
      </Stack>
    </>
  );
};

const SignatureSaveExample = () => {
  return (
    <div className="ex-signature-save">
      <SignatureSave />
    </div>
  )
};

export default SignatureSaveExample;
