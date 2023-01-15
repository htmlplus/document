/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Center, FormatBytes } from '@htmlplus/react';
const FormatBytesSeparator = () => {
  return (
    <Center>
      <FormatBytes value="1000" separator=""></FormatBytes>
      <FormatBytes value="1000" separator=" "></FormatBytes>
    </Center>
  );
};

const FormatBytesSeparatorExample = () => {
  return (
    <div className="ex-format-bytes-separator">
      <FormatBytesSeparator />
      <style>{`.ex-format-bytes-separator plus-center {  flex-direction: column;}`}</style>
    </div>
  )
};

export default FormatBytesSeparatorExample;
