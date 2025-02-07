/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/browse.js';
import '@htmlplus/ui/center.js';

function App() {
  function onPlusChange(event) {
    console.log(event.detail);
  }
  return (
    <plus-center>
      <plus-browse onPlusChange={onPlusChange}>Click Here</plus-browse>
    </plus-center>
  );
}

const BrowseDefault = () => {
  return (
    <div className="ex-preview ex-browse-default">
      <App />
    </div>
  )
};

export default BrowseDefault;
