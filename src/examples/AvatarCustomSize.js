/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/avatar-group.js';
import '@htmlplus/ui/avatar.js';
import '@htmlplus/ui/center.js';

function App() {
  return (
    <plus-center>
      <plus-avatar-group>
        <plus-avatar size="xxs">xxs</plus-avatar>
        <plus-avatar size="xs">xs</plus-avatar>
        <plus-avatar size="sm">sm</plus-avatar>
        <plus-avatar size="md">md</plus-avatar>
        <plus-avatar size="lg">lg</plus-avatar>
        <plus-avatar size="xl">xl</plus-avatar>
        <plus-avatar size="xxl">xxl</plus-avatar>
      </plus-avatar-group>
    </plus-center>
  );
}

const AvatarCustomSize = () => {
  return (
    <div className="ex-avatar-custom-size">
      <App />
      <style>{`.ex-avatar-custom-size plus-avatar[size='xxs'] {  --plus-avatar-size: 1.5rem;}.ex-avatar-custom-size plus-avatar[size='xs'] {  --plus-avatar-size: 2rem;}.ex-avatar-custom-size plus-avatar[size='sm'] {  --plus-avatar-size: 2.5rem;}.ex-avatar-custom-size plus-avatar[size='md'] {  --plus-avatar-size: 3rem;}.ex-avatar-custom-size plus-avatar[size='lg'] {  --plus-avatar-size: 3.5rem;}.ex-avatar-custom-size plus-avatar[size='xl'] {  --plus-avatar-size: 4rem;}.ex-avatar-custom-size plus-avatar[size='xxl'] {  --plus-avatar-size: 4.5rem;}`}</style>
    </div>
  )
};

export default AvatarCustomSize;
