/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { useEffect, useState } from 'react';
import { Center, Icon } from '@htmlplus/react';
import { setConfig } from '@htmlplus/core/config.js';

setConfig({
  component: {
    'plus-icon': {
      property: {
        resolver: (name) => {
          const [library, icon] = name.split('/');

          const references = {
            carbon: `https://cdn.jsdelivr.net/npm/carbon-icons/dist/svg/${icon}.svg`,
            lucide: `https://cdn.jsdelivr.net/npm/lucide-static/icons/${icon}.svg`,
            tabler: `https://cdn.jsdelivr.net/npm/@tabler/icons/icons/${icon}.svg`,
          }

          const url = references[library];

          return fetch(url)
            .then((response) => response.text())
        }
      }
    }
  }
})

const IconMultipleLibrary = () => {
  return (
    <Center>
      <Icon name="carbon/user"></Icon>
      <Icon name="lucide/user"></Icon>
      <Icon name="tabler/user"></Icon>
    </Center>
  );
};

const IconMultipleLibraryExample = () => {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  return (
    <div className="ex-icon-multiple-library">
      {ready && <IconMultipleLibrary />}
      <style>{`.ex-icon-multiple-library plus-icon {  margin: 0 1rem;}`}</style>
    </div>
  )
};

export default IconMultipleLibraryExample;
