/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { useEffect, useState } from 'react';
import { Animation, Avatar, Center } from '@htmlplus/react';
import { setConfig } from '@htmlplus/core/config.js';

setConfig({
  asset: {
    animation: {
      'custom-pulse': [
        { offset: 0, opacity: '0.6', transform: 'scale(1.00)' },
        { offset: 1, opacity: '0.0', transform: 'scale(1.60)' }
      ]
    }
  }
});

const AnimationRegisterACustomName = () => {
  return (
    <Center>
      <Avatar shape="circle">
        <Animation
          delay="0000"
          duration="2000"
          iterations="Infinity"
          name="custom-pulse"
          run
        ></Animation>
        <Animation
          delay="1000"
          duration="2000"
          iterations="Infinity"
          name="custom-pulse"
          run
        ></Animation>
        <img src="https://picsum.photos/id/64/90/90" />
      </Avatar>
    </Center>
  );
};

const AnimationRegisterACustomNameExample = () => {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  return (
    <div className="ex-animation-register-a-custom-name">
      {ready && <AnimationRegisterACustomName />}
      <style>{`.ex-animation-register-a-custom-name plus-avatar {  margin: 1.5rem;}.ex-animation-register-a-custom-name plus-animation {  border: solid 3px black;  display: inline-block;  position: absolute;  inset: 0;  border-radius: 50%;  z-index: -1;}`}</style>
    </div>
  )
};

export default AnimationRegisterACustomNameExample;
