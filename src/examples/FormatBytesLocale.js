/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Center, FormatBytes } from '@htmlplus/react';
const FormatBytesLocale = () => {
  return (
    <Center>
      <FormatBytes value="10000100" locale="en" unit="kilo"></FormatBytes>
      <FormatBytes value="10000100" locale="de" unit="kilo"></FormatBytes>
    </Center>
  );
};

const FormatBytesLocaleExample = () => {
  return (
    <div className="ex-format-bytes-locale">
      <FormatBytesLocale />
      <style>{`.ex-format-bytes-locale plus-center {  flex-direction: column;}`}</style>
    </div>
  )
};

export default FormatBytesLocaleExample;
