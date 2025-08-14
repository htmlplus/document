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
    }, 1500);
  }, []);
  return <plus-app-progress-bar ref={appProgressBarRef}></plus-app-progress-bar>;
}

const AppProgressBarDefault = () => {
  return (
    <div className="app-progress-bar-default">
      <App />
      <style>{`.app-progress-bar-default { plus-app-progress-bar {  /* This style is for demonstration purposes only and not for actual projects */  position: static;} }`}</style>
    </div>
  )
};

export default AppProgressBarDefault;
