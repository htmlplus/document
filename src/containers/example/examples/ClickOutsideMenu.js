/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { useState } from 'react';
import { ClickOutside } from '@htmlplus/react';
const ClickOutsideDefault = () => {
  const [open, setOpen] = useState(false);
  const onClick = () => {
    setOpen(!open);
  };
  const onClickOutside = () => {
    setOpen(false);
  };
  return (
    <ClickOutside onClickOutside={() => onClickOutside()}>
      <button onClick={() => onClick()}>Open Menu Dropdown</button>
      {open && (
        <div>Click me, I will stay visible until you click outside.</div>
      )}
    </ClickOutside>
  );
};

const ClickOutsideDefaultExample = () => {
  return (
    <div className="ex-click-outside-menu">
      <ClickOutsideDefault />
      <style>{`.ex-click-outside-menu plus-click-outside {  display: inline-block;  position: relative;}.ex-click-outside-menu #menu {  border: solid 1px gray;  position: absolute;  top: calc(100% + 0.25rem);  padding: 10px;}`}</style>
    </div>
  )
};

export default ClickOutsideDefaultExample;