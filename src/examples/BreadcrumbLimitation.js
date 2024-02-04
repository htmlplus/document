/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/core/breadcrumb.js';
import '@htmlplus/core/stack.js';

function App() {
  return (
    <plus-stack gap="0.75rem" vertical>
      <plus-breadcrumb separator="/" max={4} offset={0}>
        <a href="#">Item 1</a>
        <a href="#">Item 2</a>
        <a href="#">Item 3</a>
        <a href="#">Item 4</a>
        <a href="#">Item 5</a>
        <a href="#">Item 6</a>
        <a href="#">Item 7</a>
        <a href="#">Item 8</a>
      </plus-breadcrumb>
      <plus-breadcrumb separator="/" max={4} offset={2}>
        <a href="#">Item 1</a>
        <a href="#">Item 2</a>
        <a href="#">Item 3</a>
        <a href="#">Item 4</a>
        <a href="#">Item 5</a>
        <a href="#">Item 6</a>
        <a href="#">Item 7</a>
        <a href="#">Item 8</a>
      </plus-breadcrumb>
      <plus-breadcrumb separator="/" max={4} offset={-1}>
        <a href="#">Item 1</a>
        <a href="#">Item 2</a>
        <a href="#">Item 3</a>
        <a href="#">Item 4</a>
        <a href="#">Item 5</a>
        <a href="#">Item 6</a>
        <a href="#">Item 7</a>
        <a href="#">Item 8</a>
      </plus-breadcrumb>
    </plus-stack>
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
