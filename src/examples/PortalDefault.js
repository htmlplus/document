/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Faker, Portal } from '@htmlplus/react';
const PortalDefault = () => {
  return (
    <>
      <div id="target"></div>
      <div id="source">
        <Portal target="#target">
          <Faker></Faker>
        </Portal>
      </div>
    </>
  );
};

const PortalDefaultExample = () => {
  return (
    <div className="ex-portal-default">
      <PortalDefault />
      <style>{`.ex-portal-default #target {  color: blue;}.ex-portal-default #source {  color: red;}`}</style>
    </div>
  )
};

export default PortalDefaultExample;
