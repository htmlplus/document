/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/relative-time.js';
import '@htmlplus/ui/stack.js';

function App() {
  const value2 = new Date(Date.now() - 24 * 60 * 60 * 1000);
  const value1 = new Date(Date.now() - 24 * 60 * 60 * 1000);
  return (
    <plus-stack gap="0.5rem" vertical>
      <plus-relative-time numeric="auto" value={value1}></plus-relative-time>
      <plus-relative-time numeric="always" value={value2}></plus-relative-time>
    </plus-stack>
  );
}

const RelativeTimeNumeric = () => {
  return (
    <div className="ex-preview ex-relative-time-numeric">
      <App />
    </div>
  )
};

export default RelativeTimeNumeric;
