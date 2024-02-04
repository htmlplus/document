/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/core/cropper.js';
import '@htmlplus/core/grid-item.js';
import '@htmlplus/core/grid.js';

function App() {
  return (
    <plus-grid gutter="md">
      <plus-grid-item xs="12" sm="6">
        <plus-cropper
          zoomable
          zoom-ratio={0.1}
          src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
        ></plus-cropper>
      </plus-grid-item>
      <plus-grid-item xs="12" sm="6">
        <plus-cropper
          zoomable
          zoom-ratio={1}
          src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
        ></plus-cropper>
      </plus-grid-item>
    </plus-grid>
  );
}

const CropperZoomRatio = () => {
  return (
    <div className="ex-cropper-zoom-ratio">
      <App />
    </div>
  )
};

export default CropperZoomRatio;
