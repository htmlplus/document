/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Center, Cropper } from '@htmlplus/react';
const CropperToBlob = () => {
  const toBlob = () => {
    window.cropper3.toCanvas().toBlob((blob) => {
      console.log(blob);
    });
  };
  return (
    <>
      <Center>
        <Cropper
          src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
          id="cropper3"
        ></Cropper>
      </Center>
      <br />
      <Center>
        <button onClick={() => toBlob()}>To Blob</button>
      </Center>
    </>
  );
};

const CropperToBlobExample = () => {
  return (
    <div className="ex-cropper-to-blob">
      <CropperToBlob />
    </div>
  )
};

export default CropperToBlobExample;
