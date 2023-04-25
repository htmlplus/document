/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Spinner, Stack } from '@htmlplus/react';
const SpinnerColor = () => {
  return (
    <Stack gap="2rem">
      <Spinner className="spinner-1"></Spinner>
      <Spinner className="spinner-2"></Spinner>
      <Spinner className="spinner-3"></Spinner>
      <Spinner className="spinner-4"></Spinner>
      <Spinner className="spinner-5"></Spinner>
    </Stack>
  );
};

const SpinnerColorExample = () => {
  return (
    <div className="ex-spinner-color">
      <SpinnerColor />
      <style>{`.ex-spinner-color .spinner-1 {  color: #08dfc8;}.ex-spinner-color .spinner-2 {  color: #ff5449;}.ex-spinner-color .spinner-3 {  color: #5f9ee9;}.ex-spinner-color .spinner-4 {  color: #ffc903;}.ex-spinner-color .spinner-5 {  color: #9073c1;}`}</style>
    </div>
  )
};

export default SpinnerColorExample;
