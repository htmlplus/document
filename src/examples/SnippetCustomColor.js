/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/snippet.js';
import '@htmlplus/ui/stack.js';

function App() {
  return (
    <plus-stack gap="0.5rem" items="stretch" vertical>
      <plus-snippet symbol="$" color="primary">
        npm i @htmlplus/ui
      </plus-snippet>
      <plus-snippet symbol="$" color="secondary">
        npm i @htmlplus/ui
      </plus-snippet>
      <plus-snippet symbol="$" color="tertiary">
        npm i @htmlplus/ui
      </plus-snippet>
    </plus-stack>
  );
}

const SnippetCustomColor = () => {
  return (
    <div className="ex-preview ex-snippet-custom-color">
      <App />
      <style>{`.ex-snippet-custom-color plus-snippet[color='primary'] {  --plus-snippet-color: #ff5449;}.ex-snippet-custom-color plus-snippet[color='secondary'] {  --plus-snippet-color: #08dfc8;}.ex-snippet-custom-color plus-snippet[color='tertiary'] {  --plus-snippet-color: #5f9ee9;}`}</style>
    </div>
  )
};

export default SnippetCustomColor;
