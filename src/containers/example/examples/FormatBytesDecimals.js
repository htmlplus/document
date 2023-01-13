/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Center, FormatBytes } from '@htmlplus/react';
const FormatBytesDecimals = () => {
  return (
    <Center>
      <FormatBytes value="1200" decimals="0"></FormatBytes>
      <FormatBytes value="1200" decimals="3"></FormatBytes>
      <FormatBytes value="1200" decimals="[3, 3]"></FormatBytes>
      <FormatBytes value="1000" decimals="[0, 3]"></FormatBytes>
      <FormatBytes value="1000" decimals="[1, 3]"></FormatBytes>
      <FormatBytes value="1001" decimals="[0, 3]"></FormatBytes>
    </Center>
  );
};

const FormatBytesDecimalsExample = () => {
  return (
    <div className="ex-format-bytes-decimals">
      <FormatBytesDecimals />
      <style>{`.ex-format-bytes-decimals plus-center {  flex-direction: column;}`}</style>
    </div>
  )
};

export default FormatBytesDecimalsExample;
