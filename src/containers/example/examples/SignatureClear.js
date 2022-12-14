/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Center, Signature } from '@htmlplus/react';
const SignatureClear = () => {
  return (
    <>
      <Center>
        <Signature id="signature1" backgroundColor="lightgray"></Signature>
      </Center>
      <br />
      <Center>
        <button onClick={() => window.signature1.clear()}>Clear</button>
      </Center>
    </>
  );
};

const SignatureClearExample = () => {
  return (
    <div className="ex-signature-clear">
      <SignatureClear />
    </div>
  )
};

export default SignatureClearExample;
