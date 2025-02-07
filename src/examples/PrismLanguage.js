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
          if (key == 'language') {
            await import(`prismjs/components/prism-${value}`);
          }
        }
      }
    }
  }
});



function App() {
  return (
    <plus-stack gap="0.5rem" items="stretch" vertical>
      <plus-prism language="javascript">const name = '@htmlplus/ui';</plus-prism>
      <plus-prism language="csharp">string text = "Hello World!";</plus-prism>
      <plus-prism language="rust">let arr: [i32; 4] = [10, 20, 30, 40];</plus-prism>
    </plus-stack>
  );
}

const PrismLanguage = () => {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  return (
    <div className="ex-preview ex-prism-language">
      {ready && <App />}
    </div>
  )
};

export default PrismLanguage;
