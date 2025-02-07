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
        resolver: ({ name }) => {
          const url = `https://cdn.jsdelivr.net/npm/@tabler/icons/icons/${name}.svg`;
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
    <plus-center>
      <plus-icon name="heart"></plus-icon>
    </plus-center>
  );
}

const IconResolver = () => {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  return (
    <div className="ex-preview ex-icon-resolver">
      {ready && <App />}
    </div>
  )
};

export default IconResolver;
