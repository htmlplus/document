/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { useEffect, useRef } from 'react';

import '@htmlplus/ui/format-bytes.js';
import '@htmlplus/ui/stack.js';

function App() {
  const plusFormatBytesRef = useRef();
  useEffect(() => {
    plusFormatBytesRef.current.decimals = [3, 3];
  }, []);
  useEffect(() => {
    plusFormatBytesRef.current.decimals = [0, 3];
  }, []);
  useEffect(() => {
    plusFormatBytesRef.current.decimals = [1, 3];
  }, []);
  useEffect(() => {
    plusFormatBytesRef.current.decimals = [0, 3];
  }, []);
  return (
    <plus-stack vertical>
      <plus-format-bytes value={1200} decimals={0}></plus-format-bytes>
      <plus-format-bytes value={1200} decimals={3}></plus-format-bytes>
      <plus-format-bytes value={1200} ref={plusFormatBytesRef}></plus-format-bytes>
      <plus-format-bytes value={1000}></plus-format-bytes>
      <plus-format-bytes value={1000}></plus-format-bytes>
      <plus-format-bytes value={1001}></plus-format-bytes>
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
