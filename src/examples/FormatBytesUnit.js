/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/format-bytes.js';
import '@htmlplus/ui/stack.js';

function App() {
  return (
    <plus-stack vertical>
      <plus-format-bytes unit="auto" value={1000}></plus-format-bytes>
      <plus-format-bytes unit="base" value={10000}></plus-format-bytes>
      <plus-format-bytes unit="kilo" value={100000}></plus-format-bytes>
      <plus-format-bytes unit="kilo" value={1000000}></plus-format-bytes>
      <plus-format-bytes unit="kilo" value={10000000}></plus-format-bytes>
      <plus-format-bytes unit="kilo" value={100000000}></plus-format-bytes>
      <plus-format-bytes unit="kilo" value={1000000000}></plus-format-bytes>
    </plus-stack>
  );
}

const FormatBytesUnit = () => {
  return (
    <div className="format-bytes-unit">
      <App />
    </div>
  )
};

export default FormatBytesUnit;
