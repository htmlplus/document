/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { FormatBytes, Stack } from '@htmlplus/react';

function App() {
  return (
    <Stack vertical>
      <FormatBytes value={10000100} locale="en" unit="kilo"></FormatBytes>
      <FormatBytes value={10000100} locale="de" unit="kilo"></FormatBytes>
    </Stack>
  );
}

const FormatBytesLocaleExample = () => {
  return (
    <div className="ex-format-bytes-locale">
      <App />
    </div>
  )
};

export default FormatBytesLocaleExample;
