/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Avatar, Center } from '@htmlplus/react';
const AvatarCustomSize = () => {
  return (
    <Center>
      <Avatar.Group>
        <Avatar size="xxs">xxs</Avatar>
        <Avatar size="xs">xs</Avatar>
        <Avatar size="sm">sm</Avatar>
        <Avatar size="md">md</Avatar>
        <Avatar size="lg">lg</Avatar>
        <Avatar size="xl">xl</Avatar>
        <Avatar size="xxl">xxl</Avatar>
      </Avatar.Group>
    </Center>
  );
};

const AvatarCustomSizeExample = () => {
  return (
    <div className="ex-avatar-custom-size">
      <AvatarCustomSize />
      <style>{`.ex-avatar-custom-size plus-avatar[size='xxs'] {  --plus-avatar-size: 1.5rem;}.ex-avatar-custom-size plus-avatar[size='xs'] {  --plus-avatar-size: 2rem;}.ex-avatar-custom-size plus-avatar[size='sm'] {  --plus-avatar-size: 2.5rem;}.ex-avatar-custom-size plus-avatar[size='md'] {  --plus-avatar-size: 3rem;}.ex-avatar-custom-size plus-avatar[size='lg'] {  --plus-avatar-size: 3.5rem;}.ex-avatar-custom-size plus-avatar[size='xl'] {  --plus-avatar-size: 4rem;}.ex-avatar-custom-size plus-avatar[size='xxl'] {  --plus-avatar-size: 4.5rem;}`}</style>
    </div>
  )
};

export default AvatarCustomSizeExample;
