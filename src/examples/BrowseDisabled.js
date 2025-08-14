/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/browse.js';
import '@htmlplus/ui/center.js';

function App() {
  function onPlusChange() {
    alert('File selected.');
  }
  return (
    <plus-center>
      <plus-browse disabled onPlusChange={onPlusChange}>
        Click Here
      </plus-browse>
    </plus-center>
  );
}

const BrowseDisabled = () => {
  return (
    <div className="browse-disabled">
      <App />
    </div>
  )
};

export default BrowseDisabled;
