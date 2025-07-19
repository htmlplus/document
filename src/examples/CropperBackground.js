/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/cropper.js';

function App() {
  return (
    <div className="container">
      <div className="grid">
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
    </div>
  );
}

const CropperBackground = () => {
  return (
    <div className="cropper-background">
      <App />
      <style>{`.cropper-background { .container {  container-type: inline-size;}.grid {  display: grid;  align-items: start;  grid-template: auto / 1fr 1fr;  gap: 1rem;}plus-cropper {  min-width: 0;}@container (max-width: 500px) {  .grid {    grid-template: auto auto / 1fr;  }} }`}</style>
    </div>
  )
};

export default CropperBackground;
