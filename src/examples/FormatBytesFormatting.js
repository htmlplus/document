/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/format-bytes.js';
import '@htmlplus/ui/stack.js';

function App() {
  return (
    <plus-stack vertical>
      <plus-format-bytes value={1500}></plus-format-bytes>
      <plus-format-bytes value={800000000}></plus-format-bytes>
      <plus-format-bytes value={6900000000}></plus-format-bytes>
      <plus-format-bytes value={222000000000000}></plus-format-bytes>
    </plus-stack>
  );
}

const FormatBytesFormatting = () => {
  return (
    <div className="format-bytes-formatting">
      <App />
    </div>
  )
};

export default FormatBytesFormatting;
