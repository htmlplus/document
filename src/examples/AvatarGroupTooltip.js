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
        <plus-avatar>A</plus-avatar>
        <plus-tooltip>Tooltip A</plus-tooltip>
        <plus-avatar>B</plus-avatar>
        <plus-tooltip>Tooltip B</plus-tooltip>
        <plus-avatar>C</plus-avatar>
        <plus-tooltip>Tooltip C</plus-tooltip>
      </plus-avatar-group>
    </plus-center>
  );
}

const AvatarGroupTooltip = () => {
  return (
    <div className="ex-avatar-group-tooltip">
      <App />
    </div>
  )
};

export default AvatarGroupTooltip;
