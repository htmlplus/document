/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Breadcrumb, Center, Icon } from '@htmlplus/react';

function App() {
  return (
    <Center>
      <Breadcrumb separator="-" max={2} expanderText="Show more">
        <Icon slot="expander" name="chevron-compact-right"></Icon>
        <a href="#">HTMLPLUS</a>
        <a href="#">Core</a>
        <a href="#">UI Components</a>
        <a href="#">Breadcrumb</a>
      </Breadcrumb>
    </Center>
  );
}

const BreadcrumbCustomExpander = () => {
  return (
    <div className="ex-breadcrumb-custom-expander">
      <App />
      <style>{`.ex-breadcrumb-custom-expander plus-breadcrumb a {  color: inherit;  text-decoration: none;}.ex-breadcrumb-custom-expander plus-breadcrumb a:hover {  text-decoration: underline;}`}</style>
    </div>
  )
};

export default BreadcrumbCustomExpander;
