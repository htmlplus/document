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
        resolver: (name, parser) => {
          const [all, icon, type] = name.match(/^(.*)_(outline|round|sharp)$/);
          const url = `https://cdn.jsdelivr.net/npm/@material-icons/svg/svg/${icon}/${type}.svg`;
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
      <Icon name="home_outline"></Icon>
      <Icon name="home_round"></Icon>
      <Icon name="home_sharp"></Icon>
    </Stack>
  );
}

const IconMaterial = () => {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  return (
    <div className="ex-icon-material">
      {ready && <App />}
    </div>
  )
};

export default IconMaterial;
