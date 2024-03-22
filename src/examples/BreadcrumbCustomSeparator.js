/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/breadcrumb.js';
import '@htmlplus/ui/center.js';
import '@htmlplus/ui/icon.js';

function App() {
  return (
    <plus-center>
      <plus-breadcrumb>
        <plus-icon slot="separator" name="caret-right-fill"></plus-icon>
        <a href="#">First</a>
        <a href="#">Second</a>
        <a href="#">Third</a>
        <a href="#">Fourth</a>
        <a href="#">Fifth</a>
      </plus-breadcrumb>
    </plus-center>
  );
}

const BreadcrumbCustomSeparator = () => {
  return (
    <div className="ex-breadcrumb-custom-separator">
      <App />
      <style>{`.ex-breadcrumb-custom-separator plus-breadcrumb a {  color: inherit;  text-decoration: none;}.ex-breadcrumb-custom-separator plus-breadcrumb a:hover {  text-decoration: underline;}`}</style>
    </div>
  )
};

export default BreadcrumbCustomSeparator;
