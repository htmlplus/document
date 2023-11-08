/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { FormatBytes, Stack } from '@htmlplus/react';

function App() {
  return (
    <Stack vertical>
      <FormatBytes value={1000} display="short"></FormatBytes>
      <FormatBytes value={1000} display="long"></FormatBytes>
    </Stack>
  );
}

const FormatBytesDisplay = () => {
  return (
    <div className="ex-format-bytes-display">
      <App />
    </div>
  )
};

export default FormatBytesDisplay;
