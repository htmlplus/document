/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/avatar-group.js';
import '@htmlplus/ui/avatar.js';
import '@htmlplus/ui/center.js';

function App() {
  return (
    <plus-center>
      <plus-avatar-group stacked hoverable>
        <plus-avatar shape="circle">
          <img src="https://picsum.photos/id/548/90/90" />
        </plus-avatar>
        <plus-avatar shape="circle">
          <img src="https://picsum.photos/id/628/90/90" />
        </plus-avatar>
        <plus-avatar shape="circle">
          <img src="https://picsum.photos/id/660/90/90" />
        </plus-avatar>
        <plus-avatar shape="circle">
          <img src="https://picsum.photos/id/669/90/90" />
        </plus-avatar>
        <plus-avatar shape="circle">+2</plus-avatar>
      </plus-avatar-group>
    </plus-center>
  );
}

const AvatarGroupHoverable = () => {
  return (
    <div className="ex-preview ex-avatar-group-hoverable">
      <App />
    </div>
  )
};

export default AvatarGroupHoverable;
