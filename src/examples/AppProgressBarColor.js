/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { useEffect, useRef } from 'react';

import '@htmlplus/ui/app-progress-bar.js';

function App() {
  const appProgressBarRef = useRef();
  useEffect(() => {
    requestAnimationFrame(() => {
      appProgressBarRef.current?.start();
    });
    setTimeout(() => {
      appProgressBarRef.current?.done();
    }, 5000);
  }, []);
  return <plus-app-progress-bar color="#d63939" ref={appProgressBarRef}></plus-app-progress-bar>;
}

const AppProgressBarColor = () => {
  return (
    <div className="app-progress-bar-color">
      <App />
      <style>{`.app-progress-bar-color { plus-app-progress-bar {  /* This style is for demonstration purposes only and not for actual projects */  position: static;} }`}</style>
    </div>
  )
};

export default AppProgressBarColor;
