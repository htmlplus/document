/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/icon.js';
import '@htmlplus/ui/stack.js';

function App() {
  return (
    <plus-stack gap="2rem">
      <plus-icon name="house" size="xs"></plus-icon>
      <plus-icon name="house" size="sm"></plus-icon>
      <plus-icon name="house" size="md"></plus-icon>
      <plus-icon name="house" size="lg"></plus-icon>
      <plus-icon name="house" size="xl"></plus-icon>
    </plus-stack>
  );
}

const IconSizeOverriding = () => {
  return (
    <div className="ex-preview ex-icon-size-overriding">
      <App />
      <style>{`.ex-icon-size-overriding { plus-icon[size='xs'] {  height: 1em;  width: 1em;}plus-icon[size='sm'] {  height: 1.25em;  width: 1.25em;}plus-icon[size='md'] {  height: 1.5em;  width: 1.5em;}plus-icon[size='lg'] {  height: 1.75em;  width: 1.75em;}plus-icon[size='xl'] {  height: 2em;  width: 2em;} }`}</style>
    </div>
  )
};

export default IconSizeOverriding;
