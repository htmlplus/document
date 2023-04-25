/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Card, Faker, Portal } from '@htmlplus/react';
const PortalStrategy = () => {
  return (
    <>
      <Portal target="#before" strategy="before">
        <h1 className="title">Before the card</h1>
      </Portal>
      <Card outlined id="before">
        <Faker></Faker>
      </Card>
      <br />
      <Portal target="#prepend" strategy="prepend">
        <h1 className="title">Prepend the card</h1>
      </Portal>
      <Card outlined id="prepend">
        <Faker></Faker>
      </Card>
      <br />
      <Portal target="#append" strategy="append">
        <h1 className="title">Append the card</h1>
      </Portal>
      <Card outlined id="append">
        <Faker></Faker>
      </Card>
      <br />
      <Portal target="#after" strategy="after">
        <h1 className="title">After the card</h1>
      </Portal>
      <Card outlined id="after">
        <Faker></Faker>
      </Card>
    </>
  );
};

const PortalStrategyExample = () => {
  return (
    <div className="ex-portal-strategy">
      <PortalStrategy />
      <style>{`.ex-portal-strategy .title {  color: deeppink;  margin: 0;  font-weight: normal;  font-size: 1em;  margin: 1em 0;}.ex-portal-strategy plus-card {  padding: 1em;}.ex-portal-strategy plus-card p {  margin: 0;}`}</style>
    </div>
  )
};

export default PortalStrategyExample;
