/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/
import { faker } from '@faker-js/faker/locale/ja';
import { setConfig } from '@htmlplus/core/config.js';
import { Faker } from '@htmlplus/react';

export const test = setConfig({
  component: {
    'plus-faker': {
      property: {
        instance: faker
      }
    }
  }
});

const FakerLocalization = () => {
  setConfig({
    component: {
      'plus-faker': {
        property: {
          instance: faker
        }
      }
    }
  });
  return <Faker></Faker>;
};

const FakerLocalizationExample = () => {
  return (
    <div className="ex-faker-localization">
      <FakerLocalization />
    </div>
  );
};

export default FakerLocalizationExample;
