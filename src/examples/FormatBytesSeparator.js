/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { FormatBytes, Stack } from '@htmlplus/react';

function App() {
  return (
    <Stack vertical>
      <FormatBytes value={1000} separator=""></FormatBytes>
      <FormatBytes value={1000} separator=" "></FormatBytes>
    </Stack>
  );
}

const FormatBytesSeparator = () => {
  return (
    <div className="ex-format-bytes-separator">
      <App />
    </div>
  )
};

export default FormatBytesSeparator;
