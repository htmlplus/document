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
  return <plus-app-progress-bar ref={appProgressBarRef}></plus-app-progress-bar>;
}

const AppProgressBarCustomized = () => {
  return (
    <div className="ex-preview ex-app-progress-bar-customized">
      <App />
      <style>{`.ex-app-progress-bar-customized plus-app-progress-bar {    position: static;  height: 4px;  transition: 2500ms ease;  z-index: 1500;}.ex-app-progress-bar-customized plus-app-progress-bar::part(bar) {  background-color: #d63939;  transition: 500ms ease-in-out;}`}</style>
    </div>
  )
};

export default AppProgressBarCustomized;
