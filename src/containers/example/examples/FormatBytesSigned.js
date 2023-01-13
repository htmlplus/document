/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Center, FormatBytes } from '@htmlplus/react';
const FormatBytesSigned = () => {
  return (
    <Center>
      <FormatBytes value="-1000"></FormatBytes>
      <FormatBytes value="-1000" signed></FormatBytes>
      <FormatBytes value="0"></FormatBytes>
      <FormatBytes value="0" signed></FormatBytes>
      <FormatBytes value="1000"></FormatBytes>
      <FormatBytes value="1000" signed></FormatBytes>
    </Center>
  );
};

const FormatBytesSignedExample = () => {
  return (
    <div className="ex-format-bytes-signed">
      <FormatBytesSigned />
      <style>{`.ex-format-bytes-signed plus-center {  flex-direction: column;}`}</style>
    </div>
  )
};

export default FormatBytesSignedExample;
