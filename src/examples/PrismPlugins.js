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
          if (key == 'plugin') {
            await import(`prismjs/plugins/${value}/prism-${value}.js`);
            try {
              const url = `https://cdn.jsdelivr.net/npm/prismjs/plugins/${value}/prism-${value}.css`;
              const styles = await fetch(url).then((response) => response.text());
              return styles;
            } catch {}
          }
        }
      }
    }
  }
});



function App() {
  return (
    <plus-stack gap="0.5rem" items="stretch" vertical>
      <plus-prism
        plugins={{
          'line-numbers': true
        }}
      >
        const name = '@htmlplus/ui';
      </plus-prism>
      <plus-prism
        plugins={{
          'line-numbers': {
            start: 5
          }
        }}
      >
        const name = '@htmlplus/ui';
      </plus-prism>
    </plus-stack>
  );
}

const PrismPlugins = () => {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  return (
    <div className="ex-preview ex-prism-plugins">
      {ready && <App />}
    </div>
  )
};

export default PrismPlugins;
