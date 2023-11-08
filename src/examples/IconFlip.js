/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Icon, Stack } from '@htmlplus/react';

function App() {
  return (
    <Stack gap="2rem">
      <Icon name="house"></Icon>
      <Icon name="house" flip="horizontal"></Icon>
      <Icon name="house" flip="vertical"></Icon>
      <Icon name="house" flip="both"></Icon>
    </Stack>
  );
}

const IconFlip = () => {
  return (
    <div className="ex-icon-flip">
      <App />
    </div>
  )
};

export default IconFlip;
