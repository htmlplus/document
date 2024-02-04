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
          mode="move"
          src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
          view="none"
        ></plus-cropper>
      </plus-grid-item>
      <plus-grid-item xs="12" sm="6">
        <plus-cropper
          mode="crop"
          src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
        ></plus-cropper>
      </plus-grid-item>
    </plus-grid>
  );
}

const CropperMode = () => {
  return (
    <div className="ex-cropper-mode">
      <App />
      <style>{`.ex-cropper-mode plus-cropper {  height: 18rem;}`}</style>
    </div>
  )
};

export default CropperMode;
