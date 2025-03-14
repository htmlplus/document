/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/format-bytes.js';
import '@htmlplus/ui/stack.js';

function App() {
  return (
    <plus-stack vertical>
      <plus-format-bytes value={1200} decimals={0}></plus-format-bytes>
      <plus-format-bytes value={1200} decimals={3}></plus-format-bytes>
      <plus-format-bytes value={1200} decimals={[3, 3]}></plus-format-bytes>
      <plus-format-bytes value={1000} decimals={[0, 3]}></plus-format-bytes>
      <plus-format-bytes value={1000} decimals={[1, 3]}></plus-format-bytes>
      <plus-format-bytes value={1001} decimals={[0, 3]}></plus-format-bytes>
    </plus-stack>
  );
}

const FormatBytesDecimals = () => {
  return (
    <div className="ex-preview ex-format-bytes-decimals">
      <App />
    </div>
  )
};

export default FormatBytesDecimals;
