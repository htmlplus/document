/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/cropper.js';

function App() {
  return (
    <div className="container">
      <plus-cropper src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"></plus-cropper>
      <plus-cropper
        transparent
        src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
      ></plus-cropper>
    </div>
  );
}

const CropperTransparent = () => {
  return (
    <div className="cropper-transparent">
      <App />
      <style>{`.cropper-transparent { .container {  display: flex;  flex-wrap: wrap;  align-items: center;  gap: 1rem;}plus-cropper {  flex: 1;  min-width: 15rem;} }`}</style>
    </div>
  )
};

export default CropperTransparent;
