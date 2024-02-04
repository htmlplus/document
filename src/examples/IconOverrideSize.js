/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/core/icon.js';
import '@htmlplus/core/stack.js';

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

const IconOverrideSize = () => {
  return (
    <div className="ex-icon-override-size">
      <App />
      <style>{`.ex-icon-override-size plus-icon[size='xs'] {  height: 1em;  width: 1em;}.ex-icon-override-size plus-icon[size='sm'] {  height: 1.25em;  width: 1.25em;}.ex-icon-override-size plus-icon[size='md'] {  height: 1.5em;  width: 1.5em;}.ex-icon-override-size plus-icon[size='lg'] {  height: 1.75em;  width: 1.75em;}.ex-icon-override-size plus-icon[size='xl'] {  height: 2em;  width: 2em;}`}</style>
    </div>
  )
};

export default IconOverrideSize;
