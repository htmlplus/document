/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { useEffect, useState } from 'react';
import { Icon, Stack } from '@htmlplus/react';
import { setConfig } from '@htmlplus/core/config.js';

setConfig({
  element: {
    'plus-icon': {
      property: {
        resolver: async (name, parser) => {
          let category = 'regular';
          if (name.startsWith('fas-')) category = 'solid';
          if (name.startsWith('fab-')) category = 'brands';
          name = name.replace(/^fa[rbs]-/, '');
          const url = `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free/svgs/${category}/${name}.svg`;
          return fetch(url)
            .then((response) => response.text())
            .then((raw) => parser(raw))
            .then((svg) => {
              svg.setAttribute('fill', 'currentColor');
              return svg;
            });
        }
      }
    }
  }
});



function App() {
  return (
    <Stack gap="2rem">
      <Icon name="far-user"></Icon>
      <Icon name="fas-user"></Icon>
      <Icon name="fab-apple"></Icon>
    </Stack>
  );
}

const IconFontAwesome = () => {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  return (
    <div className="ex-icon-font-awesome">
      {ready && <App />}
    </div>
  )
};

export default IconFontAwesome;
