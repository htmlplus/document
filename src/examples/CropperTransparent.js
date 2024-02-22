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
        <plus-cropper src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"></plus-cropper>
      </plus-grid-item>
      <plus-grid-item xs="12" sm="6">
        <plus-cropper
          transparent
          src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
        ></plus-cropper>
      </plus-grid-item>
    </plus-grid>
  );
}

const CropperTransparent = () => {
  return (
    <div className="ex-cropper-transparent">
      <App />
    </div>
  )
};

export default CropperTransparent;
