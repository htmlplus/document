/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { useRef } from 'react';

import { Center, Cropper } from '@htmlplus/react';

function App() {
  const cropperRef = useRef();
  function onClick() {
    cropperRef.current.toCanvas().toBlob((blob) => {
      console.log(blob);
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

const CropperToBlobExample = () => {
  return (
    <div className="ex-cropper-to-blob">
      <App />
    </div>
  )
};

export default CropperToBlobExample;
