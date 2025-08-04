/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { useEffect, useState } from 'react';
import '@htmlplus/ui/faker.js';
import { faker } from '@faker-js/faker/locale/ja';

import { setConfig } from '@htmlplus/ui/config.js';

setConfig({
  elements: {
    'plus-faker': {
      properties: {
        instance: faker
      }
    }
  }
});



function App() {
  return <plus-faker></plus-faker>;
}

const FakerLocalization = () => {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  return (
    <div className="faker-localization">
      {ready && <App />}
    </div>
  )
};

export default FakerLocalization;
