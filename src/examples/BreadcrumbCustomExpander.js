/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Breadcrumb, Center, Icon } from '@htmlplus/react';
const BreadcrumbCustomExpander = () => {
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
};

const BreadcrumbCustomExpanderExample = () => {
  return (
    <div className="ex-breadcrumb-custom-expander">
      <BreadcrumbCustomExpander />
      <style>{`.ex-breadcrumb-custom-expander plus-breadcrumb a {  color: inherit;  text-decoration: none;}.ex-breadcrumb-custom-expander plus-breadcrumb a:hover {  text-decoration: underline;}`}</style>
    </div>
  )
};

export default BreadcrumbCustomExpanderExample;
