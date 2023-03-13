/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { AspectRatio } from '@htmlplus/react';
const AspectRatioImage = () => {
  return (
    <AspectRatio value="18/6">
      <img src="https://picsum.photos/id/95/640/640" />
    </AspectRatio>
  );
};

const AspectRatioImageExample = () => {
  return (
    <div className="ex-aspect-ratio-image">
      <AspectRatioImage />
      <style>{`.ex-aspect-ratio-image img {  object-fit: cover;}`}</style>
    </div>
  )
};

export default AspectRatioImageExample;
