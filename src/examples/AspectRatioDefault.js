/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { AspectRatio, Card } from '@htmlplus/react';

function App() {
  return (
    <AspectRatio value="16/9">
      <Card tile>
        <Card.Body>This box will always be 16/9 (unless you put more stuff in it)</Card.Body>
      </Card>
    </AspectRatio>
  );
}

const AspectRatioDefault = () => {
  return (
    <div className="ex-aspect-ratio-default">
      <App />
      <style>{`.ex-aspect-ratio-default plus-card {  --plus-card-background-color: lightgray;}`}</style>
    </div>
  )
};

export default AspectRatioDefault;
