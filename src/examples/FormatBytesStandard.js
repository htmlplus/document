/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { FormatBytes, Stack } from '@htmlplus/react';

function App() {
  return (
    <Stack vertical>
      <FormatBytes value={1000} standard="METRIC"></FormatBytes>
      <FormatBytes value={1024} standard="IEC"></FormatBytes>
    </Stack>
  );
}

const FormatBytesStandardExample = () => {
  return (
    <div className="ex-format-bytes-standard">
      <App />
    </div>
  )
};

export default FormatBytesStandardExample;
