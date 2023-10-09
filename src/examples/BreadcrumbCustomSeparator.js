/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Breadcrumb, Center, Icon } from '@htmlplus/react';

function App() {
  return (
    <Center>
      <Breadcrumb>
        <Icon slot="separator" name="caret-right-fill"></Icon>
        <a href="#">First</a>
        <a href="#">Second</a>
        <a href="#">Third</a>
        <a href="#">Fourth</a>
        <a href="#">Fifth</a>
      </Breadcrumb>
    </Center>
  );
}

const BreadcrumbCustomSeparatorExample = () => {
  return (
    <div className="ex-breadcrumb-custom-separator">
      <App />
      <style>{`.ex-breadcrumb-custom-separator plus-breadcrumb a {  color: inherit;  text-decoration: none;}.ex-breadcrumb-custom-separator plus-breadcrumb a:hover {  text-decoration: underline;}`}</style>
    </div>
  )
};

export default BreadcrumbCustomSeparatorExample;
