/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { useState } from 'react';
import { Faker, ProgressBar, ScrollDetector } from '@htmlplus/react';
const ScrollDetectorScrollIndicator = () => {
  const [value, setValue] = useState(0);
  const onChange = (event) => {
    setValue(event.detail.progress);
  };
  return (
    <div className="container">
      <ProgressBar value={value}></ProgressBar>
      <div className="scrollable" id="reference2">
        <Faker api="lorem.paragraphs" arguments='[20, "\n\n"]' seed={0}></Faker>
      </div>
      <ScrollDetector
        reference="#reference2"
        vertical
        onChange={(event) => onChange(event)}
      ></ScrollDetector>
    </div>
  );
};

const ScrollDetectorScrollIndicatorExample = () => {
  return (
    <div className="ex-scroll-detector-scroll-indicator dock">
      <ScrollDetectorScrollIndicator />
      <style>{`.ex-scroll-detector-scroll-indicator .container {  position: relative;}.ex-scroll-detector-scroll-indicator .scrollable {  padding: 1rem;  height: 20em;  overflow-y: auto;}`}</style>
    </div>
  )
};

export default ScrollDetectorScrollIndicatorExample;
