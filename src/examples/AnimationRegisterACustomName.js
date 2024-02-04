/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { useEffect, useState } from 'react';
import '@htmlplus/core/animation.js';
import '@htmlplus/core/avatar.js';
import '@htmlplus/core/center.js';
import { setConfig } from '@htmlplus/core/config.js';

setConfig({
  asset: {
    animation: {
      'custom-pulse': [
        {
          offset: 0,
          opacity: '0.6',
          transform: 'scale(1.00)'
        },
        {
          offset: 1,
          opacity: '0.0',
          transform: 'scale(1.60)'
        }
      ]
    }
  }
});



function App() {
  return (
    <plus-center>
      <plus-avatar shape="circle">
        <plus-animation
          delay={0}
          duration={2000}
          iterations={Infinity}
          name="custom-pulse"
          run
        ></plus-animation>
        <plus-animation
          delay={1000}
          duration={2000}
          iterations={Infinity}
          name="custom-pulse"
          run
        ></plus-animation>
        <img src="https://picsum.photos/id/64/90/90" />
      </plus-avatar>
    </plus-center>
  );
}

const AnimationRegisterACustomName = () => {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  return (
    <div className="ex-animation-register-a-custom-name">
      {ready && <App />}
      <style>{`.ex-animation-register-a-custom-name plus-avatar {  margin: 1.5rem;}.ex-animation-register-a-custom-name plus-animation {  border: solid 3px black;  display: inline-block;  position: absolute;  inset: 0;  border-radius: 50%;  z-index: -1;}`}</style>
    </div>
  )
};

export default AnimationRegisterACustomName;
