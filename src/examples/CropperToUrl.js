/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { useRef } from 'react';

import { Center, Cropper } from '@htmlplus/react';

function App() {
  const cropperRef = useRef();
  function onClick() {
    cropperRef.current.toCanvas().toBlob((blob) => {
      open(URL.createObjectURL(blob), '_blank');
    });
  }
  return (
    <>
      <Center>
        <Cropper
          src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
          ref={cropperRef}
        ></Cropper>
      </Center>
      <br />
      <Center>
        <button onClick={onClick}>To URL</button>
      </Center>
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
