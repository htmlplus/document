/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Breadcrumb, Stack } from '@htmlplus/react';

function App() {
  return (
    <Stack gap="0.75rem" vertical>
      <Breadcrumb separator="/" max={4} offset={0}>
        <a href="#">Item 1</a>
        <a href="#">Item 2</a>
        <a href="#">Item 3</a>
        <a href="#">Item 4</a>
        <a href="#">Item 5</a>
        <a href="#">Item 6</a>
        <a href="#">Item 7</a>
        <a href="#">Item 8</a>
      </Breadcrumb>
      <Breadcrumb separator="/" max={4} offset={2}>
        <a href="#">Item 1</a>
        <a href="#">Item 2</a>
        <a href="#">Item 3</a>
        <a href="#">Item 4</a>
        <a href="#">Item 5</a>
        <a href="#">Item 6</a>
        <a href="#">Item 7</a>
        <a href="#">Item 8</a>
      </Breadcrumb>
      <Breadcrumb separator="/" max={4} offset={-1}>
        <a href="#">Item 1</a>
        <a href="#">Item 2</a>
        <a href="#">Item 3</a>
        <a href="#">Item 4</a>
        <a href="#">Item 5</a>
        <a href="#">Item 6</a>
        <a href="#">Item 7</a>
        <a href="#">Item 8</a>
      </Breadcrumb>
    </Stack>
  );
}

const BreadcrumbLimitation = () => {
  return (
    <div className="ex-breadcrumb-limitation">
      <App />
      <style>{`.ex-breadcrumb-limitation plus-breadcrumb a {  color: inherit;  text-decoration: none;}.ex-breadcrumb-limitation plus-breadcrumb a:hover {  text-decoration: underline;}`}</style>
    </div>
  )
};

export default BreadcrumbLimitation;
