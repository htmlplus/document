/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Center, Icon } from '@htmlplus/react';
const IconFlip = () => {
  return (
    <Center>
      <Icon name="home"></Icon>
      <Icon name="home" flip="horizontal"></Icon>
      <Icon name="home" flip="vertical"></Icon>
      <Icon name="home" flip="both"></Icon>
    </Center>
  );
};

const IconFlipExample = () => {
  return (
    <div className="ex-icon-flip">
      <IconFlip />
      <style>{`.ex-icon-flip plus-icon {  margin: 0 1rem;}`}</style>
    </div>
  )
};

export default IconFlipExample;
