/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/cropper.js';
import '@htmlplus/ui/grid-item.js';
import '@htmlplus/ui/grid.js';

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
    <div className="ex-preview ex-cropper-mode">
      <App />
      <style>{`.ex-cropper-mode plus-cropper {  height: 18rem;}`}</style>
    </div>
  )
};

export default CropperMode;
