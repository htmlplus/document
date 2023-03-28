/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { useEffect, useState } from 'react';
import { Faker } from '@htmlplus/react';
import { setConfig } from '@htmlplus/core/config.js';
import { faker } from '@faker-js/faker/locale/ja';

setConfig({
  component: {
    'plus-faker': {
      property: {
        instance: faker
      }
    }
  }
});

const FakerLocalization = () => {
  return <Faker></Faker>;
};

const FakerLocalizationExample = () => {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  return (
    <div className="ex-faker-localization">
      {ready && <FakerLocalization />}
    </div>
  )
};

export default FakerLocalizationExample;
