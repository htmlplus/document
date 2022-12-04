/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { useState } from 'react';
import { Card, Center, ClickOutside } from '@htmlplus/react';
const ClickOutsideDefault = () => {
  const [inside, setInside] = useState(0);
  const [outside, setOutside] = useState(0);
  const onClick = () => {
    setInside(inside + 1);
  };
  const onClickOutside = () => {
    setOutside(outside + 1);
  };
  return (
    <Center>
      <ClickOutside
        onClick={() => onClick()}
        onClickOutside={() => onClickOutside()}
      >
        <Card elevation="10">
          <Card.Body>
            <b>{inside}</b> time(s) inside clicked
            <br />
            <b>{outside}</b> time(s) outside clicked
          </Card.Body>
        </Card>
      </ClickOutside>
    </Center>
  );
};

const ClickOutsideDefaultExample = () => {
  return (
    <div className="ex-click-outside-default">
      <ClickOutsideDefault />
      <style>{`undefined`}</style>
    </div>
  )
};

export default ClickOutsideDefaultExample;