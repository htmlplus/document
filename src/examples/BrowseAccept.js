/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/browse.js';
import '@htmlplus/ui/center.js';

function App() {
  return (
    <plus-center>
      <plus-browse accept=".jpg, .pdf, video/*">
        Click here to select a <b>jpg</b>, <b>pdf</b> or <b>video</b> file
      </plus-browse>
    </plus-center>
  );
}

const BrowseAccept = () => {
  return (
    <div className="ex-browse-accept">
      <App />
    </div>
  )
};

export default BrowseAccept;
