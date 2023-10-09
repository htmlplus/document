/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { useRef, useState } from 'react';

import { Center, Signature, Stack } from '@htmlplus/react';

function App() {
  const signatureRef = useRef();
  const [disabled2, setDisabled2] = useState(true);
  const [disabled1, setDisabled1] = useState(true);
  const sync = () => {
    setDisabled1(!signatureRef.current.canUndo());
    setDisabled2(!signatureRef.current.canRedo());
  };
  function onClick1() {
    signatureRef.current.undo();
    sync();
  }
  function onClick2() {
    signatureRef.current.redo();
    sync();
  }
  function onEnd() {
    sync();
  }
  return (
    <>
      <Center>
        <Signature backgroundColor="lightgray" onEnd={onEnd} ref={signatureRef}></Signature>
      </Center>
      <br />
      <Stack gap="1rem">
        <button disabled={disabled1} onClick={onClick1}>
          Undo
        </button>
        <button disabled={disabled2} onClick={onClick2}>
          Redo
        </button>
      </Stack>
    </>
  );
}

const SignatureHistoryExample = () => {
  return (
    <div className="ex-signature-history">
      <App />
    </div>
  )
};

export default SignatureHistoryExample;
