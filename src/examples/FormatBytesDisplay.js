/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { FormatBytes, Stack } from '@htmlplus/react';
const FormatBytesDisplay = () => {
  return (
    <Stack vertical>
      <FormatBytes value="1000" display="short"></FormatBytes>
      <FormatBytes value="1000" display="long"></FormatBytes>
    </Stack>
  );
};

const FormatBytesDisplayExample = () => {
  return (
    <div className="ex-format-bytes-display">
      <FormatBytesDisplay />
    </div>
  )
};

export default FormatBytesDisplayExample;
