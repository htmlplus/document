/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/core/format-bytes.js';
import '@htmlplus/core/stack.js';

function App() {
  return (
    <plus-stack vertical>
      <plus-format-bytes value={1000} separator=""></plus-format-bytes>
      <plus-format-bytes value={1000} separator=" "></plus-format-bytes>
    </plus-stack>
  );
}

const FormatBytesSeparator = () => {
  return (
    <div className="ex-format-bytes-separator">
      <App />
    </div>
  )
};

export default FormatBytesSeparator;
