/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Icon, Stack } from '@htmlplus/react';
const IconOverrideSize = () => {
  return (
    <Stack gap="2rem">
      <Icon name="house" size="xs"></Icon>
      <Icon name="house" size="sm"></Icon>
      <Icon name="house" size="md"></Icon>
      <Icon name="house" size="lg"></Icon>
      <Icon name="house" size="xl"></Icon>
    </Stack>
  );
};

const IconOverrideSizeExample = () => {
  return (
    <div className="ex-icon-override-size">
      <IconOverrideSize />
      <style>{`.ex-icon-override-size plus-icon[size='xs'] {  height: 1em;  width: 1em;}.ex-icon-override-size plus-icon[size='sm'] {  height: 1.25em;  width: 1.25em;}.ex-icon-override-size plus-icon[size='md'] {  height: 1.5em;  width: 1.5em;}.ex-icon-override-size plus-icon[size='lg'] {  height: 1.75em;  width: 1.75em;}.ex-icon-override-size plus-icon[size='xl'] {  height: 2em;  width: 2em;}`}</style>
    </div>
  )
};

export default IconOverrideSizeExample;
