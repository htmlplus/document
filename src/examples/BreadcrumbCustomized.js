/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Breadcrumb, Icon } from '@htmlplus/react';

function App() {
  return (
    <Breadcrumb max={2}>
      <Icon slot="separator" name="arrow-right-short"></Icon>
      <a href="#">HTMLPLUS</a>
      <a href="#">Core</a>
      <a href="#">UI Elements</a>
      <a href="#">Breadcrumb</a>
    </Breadcrumb>
  );
}

const BreadcrumbCustomized = () => {
  return (
    <div className="ex-breadcrumb-customized">
      <App />
      <style>{`.ex-breadcrumb-customized plus-breadcrumb {  --plus-breadcrumb-gutter-x: 0.75em;  --plus-breadcrumb-gutter-y: 0.75em;  background-color: lightgray;  border-radius: 0.25em;  display: block;  padding: 0.75em;}.ex-breadcrumb-customized plus-breadcrumb a {  text-decoration: none;  color: black;}.ex-breadcrumb-customized plus-breadcrumb::part(expander) {  background-color: transparent;  color: black;  height: 1em;  width: 1em;}.ex-breadcrumb-customized plus-breadcrumb::part(separator) {  color: black;  height: 0.75em;  width: 0.75em;}`}</style>
    </div>
  )
};

export default BreadcrumbCustomized;
