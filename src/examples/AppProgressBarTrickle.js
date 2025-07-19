/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { useEffect, useRef } from 'react';

import '@htmlplus/ui/app-progress-bar.js';

function App() {
  const appProgressBar3Ref = useRef();
  const appProgressBar2Ref = useRef();
  const appProgressBar1Ref = useRef();
  useEffect(() => {
    requestAnimationFrame(() => {
      appProgressBar1Ref.current?.start();
      appProgressBar2Ref.current?.start();
      appProgressBar3Ref.current?.start();
    });
  }, []);
  return (
    <>
      <plus-app-progress-bar
        trickle-rate={0.075}
        trickle-speed={250}
        ref={appProgressBar1Ref}
      ></plus-app-progress-bar>
      <br />
      <plus-app-progress-bar
        trickle-rate={0.05}
        trickle-speed={500}
        ref={appProgressBar2Ref}
      ></plus-app-progress-bar>
      <br />
      <plus-app-progress-bar
        trickle-rate={0.025}
        trickle-speed={750}
        ref={appProgressBar3Ref}
      ></plus-app-progress-bar>
    </>
  );
}

const AppProgressBarTrickle = () => {
  return (
    <div className="app-progress-bar-trickle">
      <App />
      <style>{`.app-progress-bar-trickle { plus-app-progress-bar {  /* This style is for demonstration purposes only and not for actual projects */  position: static;} }`}</style>
    </div>
  )
};

export default AppProgressBarTrickle;
