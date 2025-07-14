/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/cropper.js';

function App() {
  return (
    <div className="container">
      <div className="grid">
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
    </div>
  );
}

const CropperZoomRatio = () => {
  return (
    <div className="ex-preview ex-cropper-zoom-ratio">
      <App />
      <style>{`.ex-cropper-zoom-ratio { .container {  container-type: inline-size;}.grid {  display: grid;  align-items: start;  grid-template: auto / 1fr 1fr;  gap: 1rem;}plus-cropper {  min-width: 0;}@container (max-width: 500px) {  .grid {    grid-template: auto auto / 1fr;  }} }`}</style>
    </div>
  )
};

export default CropperZoomRatio;
