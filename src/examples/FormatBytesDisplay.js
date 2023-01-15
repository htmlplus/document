/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Center, FormatBytes } from '@htmlplus/react';
const FormatBytesDisplay = () => {
  return (
    <Center>
      <FormatBytes value="1000" display="short"></FormatBytes>
      <FormatBytes value="1000" display="long"></FormatBytes>
    </Center>
  );
};

const FormatBytesDisplayExample = () => {
  return (
    <div className="ex-format-bytes-display">
      <FormatBytesDisplay />
      <style>{`.ex-format-bytes-display plus-center {  flex-direction: column;}`}</style>
    </div>
  )
};

export default FormatBytesDisplayExample;
