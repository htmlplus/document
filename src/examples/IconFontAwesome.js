/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { useEffect, useState } from 'react';
import '@htmlplus/ui/icon.js';
import '@htmlplus/ui/stack.js';
import { setConfig } from '@htmlplus/ui/config.js';

setConfig({
  element: {
    'plus-icon': {
      property: {
        resolver: ({ name }) => {
          let category = 'regular';
          if (name.startsWith('fas-')) category = 'solid';
          if (name.startsWith('fab-')) category = 'brands';
          name = name.replace(/^fa[rbs]-/, '');
          const url = `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/svgs/${category}/${name}.svg`;
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
      <plus-icon name="far-user"></plus-icon>
      <plus-icon name="fas-user"></plus-icon>
      <plus-icon name="fab-apple"></plus-icon>
    </plus-stack>
  );
}

const IconFontAwesome = () => {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  return (
    <div className="ex-preview ex-icon-font-awesome">
      {ready && <App />}
    </div>
  )
};

export default IconFontAwesome;
