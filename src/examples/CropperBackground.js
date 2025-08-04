/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/cropper.js';

function App() {
  return (
    <div className="container">
      <plus-cropper
        view="none"
        src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
      ></plus-cropper>
      <plus-cropper
        background
        view="none"
        src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
      ></plus-cropper>
    </div>
  );
}

const CropperBackground = () => {
  return (
    <div className="cropper-background">
      <App />
      <style>{`.cropper-background { .container {  display: flex;  flex-wrap: wrap;  align-items: center;  gap: 1rem;}plus-cropper {  flex: 1;  min-width: 15rem;} }`}</style>
    </div>
  )
};

export default CropperBackground;
