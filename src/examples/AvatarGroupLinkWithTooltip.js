/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/avatar-group.js';
import '@htmlplus/ui/avatar.js';
import '@htmlplus/ui/center.js';
import '@htmlplus/ui/tooltip.js';

function App() {
  return (
    <plus-center>
      <plus-avatar-group>
        <plus-avatar>
          <img src="https://picsum.photos/id/177/90/90" />
          <a href="https://picsum.photos/id/177/90/90" target="_blank"></a>
        </plus-avatar>
        <plus-tooltip>Tooltip 1</plus-tooltip>
        <plus-avatar>
          <img src="https://picsum.photos/id/177/90/90" />
          <a href="https://picsum.photos/id/177/90/90" target="_blank"></a>
        </plus-avatar>
        <plus-tooltip>Tooltip 2</plus-tooltip>
        <plus-avatar>
          <img src="https://picsum.photos/id/177/90/90" />
          <a href="https://picsum.photos/id/177/90/90" target="_blank"></a>
        </plus-avatar>
        <plus-tooltip>Tooltip 3</plus-tooltip>
      </plus-avatar-group>
    </plus-center>
  );
}

const AvatarGroupLinkWithTooltip = () => {
  return (
    <div className="ex-avatar-group-link-with-tooltip">
      <App />
    </div>
  )
};

export default AvatarGroupLinkWithTooltip;
