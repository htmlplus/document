/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { AspectRatio, Card, Center } from '@htmlplus/react';
const AspectRatioCard = () => {
  return (
    <Center>
      <Card outlined>
        <Card.Body>
          <AspectRatio value="16/9">
            <div className="placeholder"></div>
          </AspectRatio>
          <h3>Title</h3>
          <p>Description of the card.</p>
        </Card.Body>
      </Card>
    </Center>
  );
};

const AspectRatioCardExample = () => {
  return (
    <div className="ex-aspect-ratio-card">
      <AspectRatioCard />
      <style>{`.ex-aspect-ratio-card plus-card {  width: 300px;}.ex-aspect-ratio-card .placeholder {  background-color: lightgray;  border-radius: 4px;}`}</style>
    </div>
  )
};

export default AspectRatioCardExample;
