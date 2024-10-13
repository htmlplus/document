/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/browse.js';
import '@htmlplus/ui/center.js';

function App() {
  function onPlusChange(event) {
    alert(`${event.detail.files.length} file(s) are selected.`);
  }
  return (
    <plus-center>
      <plus-browse multiple onPlusChange={onPlusChange}>
        Click Here
      </plus-browse>
    </plus-center>
  );
}

const BrowseMultiple = () => {
  return (
    <div className="ex-browse-multiple">
      <App />
    </div>
  )
};

export default BrowseMultiple;
