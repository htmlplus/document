/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/core/avatar-group.js';
import '@htmlplus/core/avatar.js';
import '@htmlplus/core/center.js';
import '@htmlplus/core/icon.js';

function App() {
  return (
    <plus-center>
      <plus-avatar-group>
        <plus-avatar>
          <plus-icon name="person" class="icon-1"></plus-icon>
        </plus-avatar>
        <plus-avatar>
          <plus-icon name="person" class="icon-2"></plus-icon>
        </plus-avatar>
        <plus-avatar>
          <plus-icon name="person" class="icon-3"></plus-icon>
        </plus-avatar>
      </plus-avatar-group>
    </plus-center>
  );
}

const AvatarIconRatioGlobal = () => {
  return (
    <div className="ex-avatar-icon-ratio-global">
      <App />
      <style>{`.ex-avatar-icon-ratio-global .icon-1 {  padding: 0.25em;}.ex-avatar-icon-ratio-global .icon-2 {  padding: 0.5em;}.ex-avatar-icon-ratio-global .icon-3 {  padding: 0.75em;}`}</style>
    </div>
  )
};

export default AvatarIconRatioGlobal;
