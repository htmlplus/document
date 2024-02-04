/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { useRef } from 'react';

import '@htmlplus/core/center.js';
import '@htmlplus/core/cropper.js';

function App() {
  const cropperRef = useRef();
  function onClick() {
    cropperRef.current.toCanvas().toBlob((blob) => {
      open(URL.createObjectURL(blob), '_blank');
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
        <button onClick={onClick}>To URL</button>
      </plus-center>
    </>
  );
}

const CropperToUrl = () => {
  return (
    <div className="ex-cropper-to-url">
      <App />
    </div>
  )
};

export default CropperToUrl;
