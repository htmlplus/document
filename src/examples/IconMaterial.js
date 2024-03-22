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
    <plus-stack gap="2rem">
      <plus-icon name="home_outline"></plus-icon>
      <plus-icon name="home_round"></plus-icon>
      <plus-icon name="home_sharp"></plus-icon>
    </plus-stack>
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
