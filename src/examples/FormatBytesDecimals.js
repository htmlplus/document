/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { useEffect, useRef } from 'react';

import '@htmlplus/ui/format-bytes.js';
import '@htmlplus/ui/stack.js';

function App() {
  const plusFormatBytesRef1 = useRef();
  const plusFormatBytesRef2 = useRef();
  const plusFormatBytesRef3 = useRef();
  const plusFormatBytesRef4 = useRef();
  useEffect(() => {
    plusFormatBytesRef1.current.decimals = [3, 3];
    plusFormatBytesRef2.current.decimals = [0, 3];
    plusFormatBytesRef3.current.decimals = [1, 3];
    plusFormatBytesRef4.current.decimals = [0, 3];
  }, []);
  return (
    <plus-stack vertical>
      <plus-format-bytes value={1200} decimals={0}></plus-format-bytes>
      <plus-format-bytes value={1200} decimals={3}></plus-format-bytes>
      <plus-format-bytes value={1200} ref={plusFormatBytesRef1}></plus-format-bytes>
      <plus-format-bytes value={1000} ref={plusFormatBytesRef2}></plus-format-bytes>
      <plus-format-bytes value={1000} ref={plusFormatBytesRef3}></plus-format-bytes>
      <plus-format-bytes value={1001} ref={plusFormatBytesRef4}></plus-format-bytes>
    </plus-stack>
  );
}

const FormatBytesDecimals = () => {
  return (
    <div className="ex-format-bytes-decimals">
      <App />
    </div>
  )
};

export default FormatBytesDecimals;
