/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { FormatBytes, Stack } from '@htmlplus/react';
const FormatBytesLocale = () => {
  return (
    <Stack vertical>
      <FormatBytes value="10000100" locale="en" unit="kilo"></FormatBytes>
      <FormatBytes value="10000100" locale="de" unit="kilo"></FormatBytes>
    </Stack>
  );
};

const FormatBytesLocaleExample = () => {
  return (
    <div className="ex-format-bytes-locale">
      <FormatBytesLocale />
    </div>
  )
};

export default FormatBytesLocaleExample;
