/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Avatar, Stack } from '@htmlplus/react';
const AvatarSlots = () => {
  return (
    <Stack gap="8rem">
      <Avatar size="xxl">
        <div slot="bottom">bottom</div>
        <div slot="center">center</div>
        <div slot="left">left</div>
        <div slot="left-bottom">left-bottom</div>
        <div slot="left-top">left-top</div>
        <div slot="right">right</div>
        <div slot="right-bottom">right-bottom</div>
        <div slot="right-top">right-top</div>
        <div slot="top">top</div>
      </Avatar>
      <Avatar size="xxl">
        <div slot="bottom">bottom</div>
        <div slot="center">center</div>
        <div slot="end">end</div>
        <div slot="end-bottom">end-bottom</div>
        <div slot="end-top">end-top</div>
        <div slot="start">start</div>
        <div slot="start-bottom">start-bottom</div>
        <div slot="start-top">start-top</div>
        <div slot="top">top</div>
      </Avatar>
    </Stack>
  );
};

const AvatarSlotsExample = () => {
  return (
    <div className="ex-avatar-slots">
      <AvatarSlots />
      <style>{`.ex-avatar-slots plus-avatar > div {  background-color: gray;  color: white;  font-size: 10px;  padding: 0.125rem 0.25rem;  font-family: monospace;  line-height: 1;}`}</style>
    </div>
  )
};

export default AvatarSlotsExample;
