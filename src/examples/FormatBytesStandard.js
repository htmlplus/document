/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/format-bytes.js';
import '@htmlplus/ui/stack.js';

function App() {
  return (
    <plus-stack vertical>
      <plus-format-bytes value={1000} standard="METRIC"></plus-format-bytes>
      <plus-format-bytes value={1024} standard="IEC"></plus-format-bytes>
    </plus-stack>
  );
}

const FormatBytesStandard = () => {
  return (
    <div className="ex-preview ex-format-bytes-standard">
      <App />
    </div>
  )
};

export default FormatBytesStandard;
