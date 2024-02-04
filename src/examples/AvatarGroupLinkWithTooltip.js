/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/core/avatar-group.js';
import '@htmlplus/core/avatar.js';
import '@htmlplus/core/center.js';
import '@htmlplus/core/tooltip.js';

function App() {
  return (
    <plus-center>
      <plus-avatar-group>
        <plus-avatar>
          <img src="https://picsum.photos/id/177/90/90" />
          <a href="https://picsum.photos/id/177/90/90" target="_blank"></a>
        </plus-avatar>
        <plus-tooltip>Tooltip</plus-tooltip>
        <plus-avatar>
          <img src="https://picsum.photos/id/177/90/90" />
          <a href="https://picsum.photos/id/177/90/90" target="_blank"></a>
        </plus-avatar>
        <plus-tooltip>Tooltip</plus-tooltip>
        <plus-avatar>
          <img src="https://picsum.photos/id/177/90/90" />
          <a href="https://picsum.photos/id/177/90/90" target="_blank"></a>
        </plus-avatar>
        <plus-tooltip>Tooltip</plus-tooltip>
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
