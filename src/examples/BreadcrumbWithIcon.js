/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/breadcrumb.js';
import '@htmlplus/ui/center.js';
import '@htmlplus/ui/icon.js';

function App() {
  return (
    <plus-center>
      <plus-breadcrumb separator="/">
        <div>
          <plus-icon name="house"></plus-icon>
          &nbsp;
          <a href="#">HTMLPLUS</a>
        </div>
        <div>
          <plus-icon name="brush"></plus-icon>
          &nbsp;
          <a href="#">UI</a>
        </div>
        <div>
          <plus-icon name="puzzle"></plus-icon>
          &nbsp;
          <a href="#">Elements</a>
        </div>
        <div>Breadcrumb</div>
      </plus-breadcrumb>
    </plus-center>
  );
}

const BreadcrumbWithIcon = () => {
  return (
    <div className="breadcrumb-with-icon">
      <App />
      <style>{`.breadcrumb-with-icon { plus-breadcrumb a {  color: inherit;  text-decoration: none;  vertical-align: middle;}plus-breadcrumb a:hover {  text-decoration: underline;} }`}</style>
    </div>
  )
};

export default BreadcrumbWithIcon;
