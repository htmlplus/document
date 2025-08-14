/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/breadcrumb.js';
import '@htmlplus/ui/icon.js';

function App() {
  return (
    <plus-breadcrumb block max={2}>
      <plus-icon slot="separator" name="arrow-right-short"></plus-icon>
      <a href="#">HTMLPLUS</a>
      <a href="#">UI</a>
      <a href="#">Elements</a>
      <a href="#">Breadcrumb</a>
    </plus-breadcrumb>
  );
}

const BreadcrumbCustomized = () => {
  return (
    <div className="breadcrumb-customized">
      <App />
      <style>{`.breadcrumb-customized { plus-breadcrumb {  gap: 0.75em;  background-color: lightgray;  border-radius: 0.25em;  padding: 0.75em;}plus-breadcrumb a {  text-decoration: none;  color: black;}plus-breadcrumb::part(expander) {  background-color: transparent;  color: black;  height: 1em;  width: 1em;}plus-breadcrumb::part(separator) {  color: black;  height: 0.75em;  width: 0.75em;} }`}</style>
    </div>
  )
};

export default BreadcrumbCustomized;
