/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { useEffect, useState } from 'react';
import '@htmlplus/ui/icon.js';
import '@htmlplus/ui/stack.js';
import { setConfig } from '@htmlplus/ui/config.js';

setConfig({
  elements: {
    'plus-icon': {
      properties: {
        resolver: ({ name }) => {
          const [library, icon] = name.split('/');
          const references = {
            carbon: `https://cdn.jsdelivr.net/npm/carbon-icons/dist/svg/${icon}.svg`,
            lucide: `https://cdn.jsdelivr.net/npm/lucide-static/icons/${icon}.svg`,
            tabler: `https://cdn.jsdelivr.net/npm/@tabler/icons/icons/${icon}.svg`
          };
          const url = references[library];
          return fetch(url).then(async (response) => {
            const body = await response.text();
            if (!response.ok) throw new Error(body);
            return body;
          });
        }
      }
    }
  }
});



function App() {
  return (
    <plus-stack gap="2rem">
      <plus-icon name="carbon/user"></plus-icon>
      <plus-icon name="lucide/user"></plus-icon>
      <plus-icon name="tabler/user"></plus-icon>
    </plus-stack>
  );
}

const IconMultipleLibrary = () => {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  return (
    <div className="icon-multiple-library">
      {ready && <App />}
    </div>
  )
};

export default IconMultipleLibrary;
