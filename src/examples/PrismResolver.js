/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { useEffect, useState } from 'react';
import '@htmlplus/ui/prism.js';
import { setConfig } from '@htmlplus/ui/config.js';

setConfig({
  elements: {
    'plus-prism': {
      properties: {
        async resolver({ key, value }) {
          switch (key) {
            case 'language': {
              await import(`prismjs/components/prism-${value}.js`);
              break;
            }
            case 'plugin': {
              await import(`prismjs/plugins/${value}/prism-${value}.js`);
              try {
                const url = `https://cdn.jsdelivr.net/npm/prismjs/plugins/${value}/prism-${value}.css`;
                const styles = await fetch(url).then((response) => response.text());
                return styles;
              } catch {}
              break;
            }
            case 'theme': {
              const url = `https://cdn.jsdelivr.net/npm/prismjs/themes/prism-${value}.css`;
              const styles = await fetch(url).then((response) => response.text());
              return styles;
            }
          }
        }
      }
    }
  }
});



function App() {
  return (
    <plus-prism
      language="python"
      theme="solarizedlight"
      plugins={{
        'line-numbers': true
      }}
    >
      print("Hello, World!")
    </plus-prism>
  );
}

const PrismResolver = () => {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  return (
    <div className="prism-resolver">
      {ready && <App />}
    </div>
  )
};

export default PrismResolver;
