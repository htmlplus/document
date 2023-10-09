/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { AspectRatio } from '@htmlplus/react';

function App() {
  return (
    <AspectRatio value="18/6">
      <img src="https://picsum.photos/id/95/640/640" />
    </AspectRatio>
  );
}

const AspectRatioImageExample = () => {
  return (
    <div className="ex-aspect-ratio-image">
      <App />
      <style>{`.ex-aspect-ratio-image img {  object-fit: cover;}`}</style>
    </div>
  )
};

export default AspectRatioImageExample;
