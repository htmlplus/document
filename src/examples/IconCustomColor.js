/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Icon, Stack } from '@htmlplus/react';
const IconCustomColor = () => {
  return (
    <Stack gap="2rem">
      <Icon name="house" color="primary"></Icon>
      <Icon name="house" color="secondary"></Icon>
      <Icon name="house" color="tertiary"></Icon>
    </Stack>
  );
};

const IconCustomColorExample = () => {
  return (
    <div className="ex-icon-custom-color">
      <IconCustomColor />
      <style>{`.ex-icon-custom-color [color='primary'] {  color: #ff5449;}.ex-icon-custom-color [color='secondary'] {  color: #08dfc8;}.ex-icon-custom-color [color='tertiary'] {  color: #5f9ee9;}`}</style>
    </div>
  )
};

export default IconCustomColorExample;
