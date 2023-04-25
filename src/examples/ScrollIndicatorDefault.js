/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Faker, ScrollIndicator } from '@htmlplus/react';
const ScrollIndicatorDefault = () => {
  return (
    <div className="container">
      <ScrollIndicator source=".scrollable"></ScrollIndicator>
      <div className="scrollable">
        <Faker api="lorem.paragraphs" arguments='[15, "\n\n"]'></Faker>
      </div>
    </div>
  );
};

const ScrollIndicatorDefaultExample = () => {
  return (
    <div className="ex-scroll-indicator-default dock">
      <ScrollIndicatorDefault />
      <style>{`.ex-scroll-indicator-default .container {  position: relative;}.ex-scroll-indicator-default .scrollable {  height: 20em;  overflow-y: auto;}.ex-scroll-indicator-default plus-scroll-indicator {  position: absolute;  top: 0;}`}</style>
    </div>
  )
};

export default ScrollIndicatorDefaultExample;
