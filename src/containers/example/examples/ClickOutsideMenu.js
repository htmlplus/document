/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { useState } from 'react';
import { Card, Center, ClickOutside } from '@htmlplus/react';
const ClickOutsideDefault = () => {
  const [open, setOpen] = useState(false);
  const onClick = () => {
    setOpen(!open);
  };
  const onClickOutside = () => {
    setOpen(false);
  };
  return (
    <Center>
      <ClickOutside onClickOutside={() => onClickOutside()}>
        <button onClick={() => onClick()}>Open Menu Dropdown</button>
        {open && (
          <Card elevation="10" id="menu" outlined>
            <Card.Body>It will stay visible until you click outside.</Card.Body>
          </Card>
        )}
      </ClickOutside>
    </Center>
  );
};

const ClickOutsideDefaultExample = () => {
  return (
    <div className="ex-click-outside-menu">
      <ClickOutsideDefault />
      <style>{`.ex-click-outside-menu plus-card {  position: absolute;  top: calc(100% + 0.25rem);}.ex-click-outside-menu plus-click-outside {  display: inline-block;  position: relative;}`}</style>
    </div>
  )
};

export default ClickOutsideDefaultExample;
