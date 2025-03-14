/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/relative-time.js';
import '@htmlplus/ui/stack.js';

function App() {
  return (
    <plus-stack gap="0.5rem" vertical>
      <plus-relative-time value="2020-01-01T00:00:00" format="narrow"></plus-relative-time>
      <plus-relative-time value="2020-01-01T00:00:00" format="short"></plus-relative-time>
      <plus-relative-time value="2020-01-01T00:00:00" format="long"></plus-relative-time>
    </plus-stack>
  );
}

const RelativeTimeFormat = () => {
  return (
    <div className="ex-preview ex-relative-time-format">
      <App />
    </div>
  )
};

export default RelativeTimeFormat;
