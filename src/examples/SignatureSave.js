/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { useRef } from 'react';

import '@htmlplus/ui/center.js';
import '@htmlplus/ui/signature.js';

function App() {
  const signatureRef = useRef();
  function onClick() {
    const tab = open('', '_blank');
    setTimeout(() => {
      tab.document.write(signatureRef.current.value);
    }, 250);
  }
  return (
    <>
      <plus-center>
        <plus-signature ref={signatureRef}></plus-signature>
      </plus-center>
      <br />
      <plus-center>
        <button onClick={onClick}>Save</button>
      </plus-center>
    </>
  );
}

const SignatureSave = () => {
  return (
    <div className="signature-save">
      <App />
    </div>
  )
};

export default SignatureSave;
