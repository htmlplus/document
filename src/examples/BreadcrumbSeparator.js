/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/breadcrumb.js';
import '@htmlplus/ui/center.js';

function App() {
  return (
    <plus-center>
      <plus-breadcrumb separator="-">
        <a href="#">First</a>
        <a href="#">Second</a>
        <a href="#">Third</a>
        <a href="#">Fourth</a>
        <a href="#">Fifth</a>
      </plus-breadcrumb>
    </plus-center>
  );
}

const BreadcrumbSeparator = () => {
  return (
    <div className="ex-preview ex-breadcrumb-separator">
      <App />
      <style>{`.ex-breadcrumb-separator { plus-breadcrumb a {  color: inherit;  text-decoration: none;}plus-breadcrumb a:hover {  text-decoration: underline;} }`}</style>
    </div>
  )
};

export default BreadcrumbSeparator;
