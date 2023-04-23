/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Center, Icon } from '@htmlplus/react';
const IconCustomColor = () => {
  return (
    <Center>
      <Icon name="home" color="primary"></Icon>
      <Icon name="home" color="secondary"></Icon>
      <Icon name="home" color="tertiary"></Icon>
    </Center>
  );
};

const IconCustomColorExample = () => {
  return (
    <div className="ex-icon-custom-color">
      <IconCustomColor />
      <style>{`.ex-icon-custom-color plus-icon {  margin: 0 1rem;}.ex-icon-custom-color [color='primary'] {  color: #ff5449;}.ex-icon-custom-color [color='secondary'] {  color: #08dfc8;}.ex-icon-custom-color [color='tertiary'] {  color: #5f9ee9;}`}</style>
    </div>
  )
};

export default IconCustomColorExample;
