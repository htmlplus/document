/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { FormatBytes, Stack } from '@htmlplus/react';
const FormatBytesStandard = () => {
  return (
    <Stack vertical>
      <FormatBytes value="1000" standard="METRIC"></FormatBytes>
      <FormatBytes value="1024" standard="IEC"></FormatBytes>
    </Stack>
  );
};

const FormatBytesStandardExample = () => {
  return (
    <div className="ex-format-bytes-standard">
      <FormatBytesStandard />
    </div>
  )
};

export default FormatBytesStandardExample;
