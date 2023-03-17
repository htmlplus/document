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
      <style>{`.ex-avatar-custom-size plus-avatar[size='xxs'] {  width: 1.5rem;  height: 1.5rem;}.ex-avatar-custom-size plus-avatar[size='xs'] {  width: 1.75rem;  height: 1.75rem;}.ex-avatar-custom-size plus-avatar[size='sm'] {  width: 2.25rem;  height: 2.25rem;}.ex-avatar-custom-size plus-avatar[size='md'] {  width: 3rem;  height: 3rem;}.ex-avatar-custom-size plus-avatar[size='lg'] {  width: 4rem;  height: 4rem;}.ex-avatar-custom-size plus-avatar[size='xl'] {  width: 5.25rem;  height: 5.25rem;}.ex-avatar-custom-size plus-avatar[size='xxl'] {  width: 6.75rem;  height: 6.75rem;}`}</style>
    </div>
  )
};

export default AvatarCustomSizeExample;
