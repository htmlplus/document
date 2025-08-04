/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/cropper.js';

function App() {
  return (
    <div className="container">
      <plus-cropper
        zoomable
        zoom-ratio={0.1}
        src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
      ></plus-cropper>
      <plus-cropper
        zoomable
        zoom-ratio={1}
        src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
      ></plus-cropper>
    </div>
  );
}

const CropperZoomRatio = () => {
  return (
    <div className="cropper-zoom-ratio">
      <App />
      <style>{`.cropper-zoom-ratio { .container {  display: flex;  flex-wrap: wrap;  align-items: center;  gap: 1rem;}plus-cropper {  flex: 1;  min-width: 15rem;} }`}</style>
    </div>
  )
};

export default CropperZoomRatio;
