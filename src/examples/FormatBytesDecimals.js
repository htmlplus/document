/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { FormatBytes, Stack } from '@htmlplus/react';

function App() {
  return (
    <Stack vertical>
      <FormatBytes value={1200} decimals={0}></FormatBytes>
      <FormatBytes value={1200} decimals={3}></FormatBytes>
      <FormatBytes value={1200} decimals={[3, 3]}></FormatBytes>
      <FormatBytes value={1000} decimals={[0, 3]}></FormatBytes>
      <FormatBytes value={1000} decimals={[1, 3]}></FormatBytes>
      <FormatBytes value={1001} decimals={[0, 3]}></FormatBytes>
    </Stack>
  );
}

const FormatBytesDecimalsExample = () => {
  return (
    <div className="ex-format-bytes-decimals">
      <App />
    </div>
  )
};

export default FormatBytesDecimalsExample;
