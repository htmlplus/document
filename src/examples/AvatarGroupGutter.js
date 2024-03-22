/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/avatar-group.js';
import '@htmlplus/ui/avatar.js';
import '@htmlplus/ui/center.js';

function App() {
  return (
    <>
      <plus-center>
        <plus-avatar-group>
          <plus-avatar></plus-avatar>
          <plus-avatar></plus-avatar>
          <plus-avatar></plus-avatar>
        </plus-avatar-group>
      </plus-center>
      <br />
      <plus-center>
        <plus-avatar-group stacked>
          <plus-avatar></plus-avatar>
          <plus-avatar></plus-avatar>
          <plus-avatar></plus-avatar>
        </plus-avatar-group>
      </plus-center>
    </>
  );
}

const AvatarGroupGutter = () => {
  return (
    <div className="ex-avatar-group-gutter">
      <App />
      <style>{`.ex-avatar-group-gutter plus-avatar-group {  --plus-avatar-group-gutter-stacked: -2rem;  --plus-avatar-group-gutter-unstacked: 2rem;}`}</style>
    </div>
  )
};

export default AvatarGroupGutter;
