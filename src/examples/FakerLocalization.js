/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { useEffect, useState } from 'react';
import '@htmlplus/core/faker.js';
import { faker } from '@faker-js/faker/locale/ja';

import { setConfig } from '@htmlplus/core/config.js';

setConfig({
  element: {
    'plus-faker': {
      property: {
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
    <div className="ex-faker-localization">
      {ready && <App />}
    </div>
  )
};

export default FakerLocalization;
