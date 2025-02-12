/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/breadcrumb.js';
import '@htmlplus/ui/center.js';

function App() {
  return (
    <plus-center>
      <plus-breadcrumb separator="/">
        <a href="#">HTMLPLUS</a>
        <a href="#">UI</a>
        <a href="#">Elements</a>
        <span>Breadcrumb</span>
      </plus-breadcrumb>
    </plus-center>
  );
}

const BreadcrumbDefault = () => {
  return (
    <div className="ex-preview ex-breadcrumb-default">
      <App />
      <style>{`.ex-breadcrumb-default { plus-breadcrumb a {  color: inherit;  text-decoration: none;}plus-breadcrumb a:hover {  text-decoration: underline;} }`}</style>
    </div>
  )
};

export default BreadcrumbDefault;
