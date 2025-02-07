/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { useRef } from 'react';

import '@htmlplus/ui/center.js';
import '@htmlplus/ui/cropper.js';

function App() {
  const cropperRef = useRef();
  function onClick() {
    cropperRef.current.toCanvas().toBlob((blob) => {
      console.log(blob);
    });
  }
  return (
    <>
      <plus-center>
        <plus-cropper
          src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
          ref={cropperRef}
        ></plus-cropper>
      </plus-center>
      <br />
      <plus-center>
        <button onClick={onClick}>To Blob</button>
      </plus-center>
    </>
  );
}

const CropperToBlob = () => {
  return (
    <div className="ex-preview ex-cropper-to-blob">
      <App />
    </div>
  )
};

export default CropperToBlob;
