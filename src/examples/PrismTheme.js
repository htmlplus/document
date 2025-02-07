/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { useEffect, useState } from 'react';
import '@htmlplus/ui/prism.js';
import '@htmlplus/ui/stack.js';
import { setConfig } from '@htmlplus/ui/config.js';

setConfig({
  element: {
    'plus-prism': {
      property: {
        async resolver({ key, value }) {
          if (key == 'theme') {
            const url = `https://cdn.jsdelivr.net/npm/prismjs/themes/prism-${value}.css`;
            const styles = await fetch(url).then((response) => response.text());
            return styles;
          }
        }
      }
    }
  }
});



function App() {
  return (
    <plus-stack gap="0.5rem" items="stretch" vertical>
      <plus-prism theme="default">const theme = 'default';</plus-prism>
      <plus-prism theme="coy">const theme = 'coy';</plus-prism>
      <plus-prism theme="dark">const theme = 'dark';</plus-prism>
      <plus-prism theme="funky">const theme = 'funky';</plus-prism>
      <plus-prism theme="okaidia">const theme = 'okaidia';</plus-prism>
      <plus-prism theme="solarizedlight">const theme = 'solarizedlight';</plus-prism>
      <plus-prism theme="tomorrow">const theme = 'tomorrow';</plus-prism>
      <plus-prism theme="twilight">const theme = 'twilight';</plus-prism>
    </plus-stack>
  );
}

const PrismTheme = () => {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  return (
    <div className="ex-preview ex-prism-theme">
      {ready && <App />}
    </div>
  )
};

export default PrismTheme;
