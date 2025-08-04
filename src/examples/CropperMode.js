/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/cropper.js';

function App() {
  return (
    <div className="container">
      <plus-cropper
        mode="move"
        src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
        view="none"
      ></plus-cropper>
      <plus-cropper
        mode="crop"
        src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
      ></plus-cropper>
    </div>
  );
}

const CropperMode = () => {
  return (
    <div className="cropper-mode">
      <App />
      <style>{`.cropper-mode { .container {  display: flex;  flex-wrap: wrap;  align-items: center;  gap: 1rem;}plus-cropper {  flex: 1;  min-width: 15rem;} }`}</style>
    </div>
  )
};

export default CropperMode;
