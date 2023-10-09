/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Breadcrumb, Center } from '@htmlplus/react';

function App() {
  return (
    <Center>
      <Breadcrumb separator="-">
        <a href="#">First</a>
        <a href="#">Second</a>
        <a href="#">Third</a>
        <a href="#">Fourth</a>
        <a href="#">Fifth</a>
      </Breadcrumb>
    </Center>
  );
}

const BreadcrumbSeparatorExample = () => {
  return (
    <div className="ex-breadcrumb-separator">
      <App />
      <style>{`.ex-breadcrumb-separator plus-breadcrumb a {  color: inherit;  text-decoration: none;}.ex-breadcrumb-separator plus-breadcrumb a:hover {  text-decoration: underline;}`}</style>
    </div>
  )
};

export default BreadcrumbSeparatorExample;
