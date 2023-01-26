/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

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
  return <Faker locale="ja"></Faker>;
};

const FakerLocalizationExample = () => {
  return (
    <div className="ex-faker-localization">
      <FakerLocalization />
    </div>
  )
};

export default FakerLocalizationExample;
