/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/cropper.js';

function App() {
  return (
    <div className="container">
      <div className="container">
        <plus-cropper src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"></plus-cropper>
        <plus-cropper
          zoomable
          src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
        ></plus-cropper>
      </div>
      <div className="container">
        <plus-cropper
          zoomable="touch"
          src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
        ></plus-cropper>
        <plus-cropper
          zoomable="wheel"
          src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
        ></plus-cropper>
      </div>
    </div>
  );
}

const CropperZoomable = () => {
  return (
    <div className="cropper-zoomable">
      <App />
      <style>{`.cropper-zoomable { .container {  display: flex;  flex-grow: 1;  flex-wrap: wrap;  align-items: center;  gap: 1rem;}plus-cropper {  flex: 1;  min-width: 15rem;} }`}</style>
    </div>
  )
};

export default CropperZoomable;
