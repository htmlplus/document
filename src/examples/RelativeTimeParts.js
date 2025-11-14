/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/center.js';
import '@htmlplus/ui/relative-time.js';

function App() {
  return (
    <plus-center>
      <plus-relative-time value="2020-01-01T00:00:00"></plus-relative-time>
    </plus-center>
  );
}

const RelativeTimeParts = () => {
  return (
    <div className="relative-time-parts">
      <App />
      <style>{`.relative-time-parts { plus-relative-time::part(integer) {  font-weight: bold;}plus-relative-time::part(literal) {  color: gray;} }`}</style>
    </div>
  )
};

export default RelativeTimeParts;
