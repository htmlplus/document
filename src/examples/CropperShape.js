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
          shape="rectangle"
          aspect-ratio="2"
          src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
        ></plus-cropper>
      </plus-grid-item>
      <plus-grid-item xs="12" sm="6">
        <plus-grid gutter="md">
          <plus-grid-item xs="12">
            <plus-cropper
              shape="square"
              src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
            ></plus-cropper>
          </plus-grid-item>
          <plus-grid-item xs="12">
            <plus-cropper
              shape="circle"
              src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
            ></plus-cropper>
          </plus-grid-item>
        </plus-grid>
      </plus-grid-item>
    </plus-grid>
  );
}

const CropperShape = () => {
  return (
    <div className="ex-cropper-shape">
      <App />
      <style>{`.ex-cropper-shape plus-cropper[shape='rectangle'] {  height: 100%;}`}</style>
    </div>
  )
};

export default CropperShape;
