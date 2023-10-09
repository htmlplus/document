/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Avatar, Center } from '@htmlplus/react';

function App() {
  return (
    <Center>
      <Avatar>
        <svg viewBox="0 0 24 24" stroke="currentColor" fill="none">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <circle cx="12" cy="7" r="4"></circle>
          <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
        </svg>
      </Avatar>
    </Center>
  );
}

const AvatarSvgRatioExample = () => {
  return (
    <div className="ex-avatar-svg-ratio">
      <App />
      <style>{`.ex-avatar-svg-ratio svg {  padding: 0.5rem;  box-sizing: border-box;}`}</style>
    </div>
  )
};

export default AvatarSvgRatioExample;
