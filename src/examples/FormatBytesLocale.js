/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/format-bytes.js';
import '@htmlplus/ui/stack.js';

function App() {
  return (
    <plus-stack vertical>
      <plus-format-bytes value={10000100} locale="en" unit="kilo"></plus-format-bytes>
      <plus-format-bytes value={10000100} locale="de" unit="kilo"></plus-format-bytes>
    </plus-stack>
  );
}

const FormatBytesLocale = () => {
  return (
    <div className="ex-preview ex-format-bytes-locale">
      <App />
    </div>
  )
};

export default FormatBytesLocale;
