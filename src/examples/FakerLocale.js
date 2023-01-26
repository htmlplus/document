/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Faker } from '@htmlplus/react';
import { setConfig } from '@htmlplus/core/config.js';
import { faker } from '@faker-js/faker/locale/de';

setConfig({
  component: {
    'plus-faker': {
      property: {
        // instance: faker
      }
    }
  }
});

const FakerLocale = () => {
  return <Faker></Faker>;
};

const FakerLocaleExample = () => {
  return (
    <div className="ex-faker-locale">
      <FakerLocale />
    </div>
  )
};

export default FakerLocaleExample;
