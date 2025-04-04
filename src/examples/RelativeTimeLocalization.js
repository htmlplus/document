/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/relative-time.js';
import '@htmlplus/ui/stack.js';

function App() {
  return (
    <plus-stack gap="0.5rem" vertical>
      <plus-relative-time value="2020-01-01T00:00:00" lang="en"></plus-relative-time>
      <plus-relative-time value="2020-01-01T00:00:00" lang="ja"></plus-relative-time>
      <plus-relative-time value="2020-01-01T00:00:00" lang="es"></plus-relative-time>
    </plus-stack>
  );
}

const RelativeTimeLocalization = () => {
  return (
    <div className="ex-preview ex-relative-time-localization">
      <App />
    </div>
  )
};

export default RelativeTimeLocalization;
