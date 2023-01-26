/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Faker, ScrollDetector } from '@htmlplus/react';
const ScrollDetectorDefault = () => {
  const onChange = (event) => {
    console.log(event.detail);
  };
  return (
    <div className="container">
      <div className="scrollable">
        <Faker api="lorem.paragraphs" arguments='[20, "\n\n"]'></Faker>
      </div>
      <ScrollDetector
        source=".scrollable"
        vertical
        onChange={(event) => onChange(event)}
      ></ScrollDetector>
    </div>
  );
};

const ScrollDetectorDefaultExample = () => {
  return (
    <div className="ex-scroll-detector-default dock">
      <ScrollDetectorDefault />
      <style>{`.ex-scroll-detector-default .container {  position: relative;}.ex-scroll-detector-default .scrollable {  height: 20em;  overflow-y: auto;}`}</style>
    </div>
  )
};

export default ScrollDetectorDefaultExample;
