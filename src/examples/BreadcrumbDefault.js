/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Breadcrumb, Center } from '@htmlplus/react';
const BreadcrumbDefault = () => {
  return (
    <Center>
      <Breadcrumb separator="/">
        <a href="#">HTMLPLUS</a>
        <a href="#">Core</a>
        <a href="#">UI Components</a>
        <span>Breadcrumb</span>
      </Breadcrumb>
    </Center>
  );
};

const BreadcrumbDefaultExample = () => {
  return (
    <div className="ex-breadcrumb-default">
      <BreadcrumbDefault />
      <style>{`.ex-breadcrumb-default plus-breadcrumb a {  color: inherit;  text-decoration: none;}.ex-breadcrumb-default plus-breadcrumb a:hover {  text-decoration: underline;}`}</style>
    </div>
  )
};

export default BreadcrumbDefaultExample;
