/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { useEffect, useState } from 'react';
import '@htmlplus/ui/center.js';
import '@htmlplus/ui/icon.js';
import { setConfig } from '@htmlplus/ui/config.js';

setConfig({
  element: {
    'plus-icon': {
      property: {
        resolver: async (name, parser) => {
          return fetch(`https://cdn.jsdelivr.net/npm/@tabler/icons/icons/${name}.svg`)
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
    <plus-center>
      <plus-icon name="heart"></plus-icon>
    </plus-center>
  );
}

const IconResolver = () => {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  return (
    <div className="ex-icon-resolver">
      {ready && <App />}
    </div>
  )
};

export default IconResolver;
