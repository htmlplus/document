/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Center, FormatBytes } from '@htmlplus/react';
const FormatBytesStandard = () => {
  return (
    <Center>
      <FormatBytes value="1000" standard="METRIC"></FormatBytes>
      <FormatBytes value="1024" standard="IEC"></FormatBytes>
    </Center>
  );
};

const FormatBytesStandardExample = () => {
  return (
    <div className="ex-format-bytes-standard">
      <FormatBytesStandard />
      <style>{`.ex-format-bytes-standard plus-center {  flex-direction: column;}`}</style>
    </div>
  )
};

export default FormatBytesStandardExample;
