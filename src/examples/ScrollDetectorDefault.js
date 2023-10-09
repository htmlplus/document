/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Faker, ScrollDetector } from '@htmlplus/react';

function App() {
  function onChange(event) {
    console.log(event.detail);
  }
  return (
    <div className="container">
      <div className="scrollable reference1">
        <Faker api="lorem.paragraphs" arguments={[20, '\n\n']}></Faker>
      </div>
      <ScrollDetector reference=".reference1" vertical onChange={onChange}></ScrollDetector>
    </div>
  );
}

const ScrollDetectorDefaultExample = () => {
  return (
    <div className="ex-scroll-detector-default">
      <App />
      <style>{`.ex-scroll-detector-default .container {  position: relative;}.ex-scroll-detector-default .scrollable {  height: 20em;  overflow-y: auto;}`}</style>
    </div>
  )
};

export default ScrollDetectorDefaultExample;
