/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { useEffect, useState } from 'react';
import { Faker } from '@htmlplus/react';
import { faker } from '@faker-js/faker/locale/ja';

import { setConfig } from '@htmlplus/core/config.js';

setConfig({
  component: {
    'plus-faker': {
      property: {
        instance: faker
      }
    }
  }
});



function App() {
  return <Faker></Faker>;
}

const FakerLocalizationExample = () => {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  return (
    <div className="ex-faker-localization">
      {ready && <App />}
    </div>
  )
};

export default FakerLocalizationExample;
