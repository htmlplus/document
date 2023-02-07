/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Center, Cropper } from '@htmlplus/react';
const CropperToUrl = () => {
  const toURL = () => {
    window.cropper4.toCanvas().toBlob((blob) => {
      window.open(URL.createObjectURL(blob), '_blank');
    });
  };
  return (
    <>
      <Center>
        <Cropper
          src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
          id="cropper4"
        ></Cropper>
      </Center>
      <br />
      <Center>
        <button onClick={() => toURL()}>To URL</button>
      </Center>
    </>
  );
};

const CropperToUrlExample = () => {
  return (
    <div className="ex-cropper-to-url">
      <CropperToUrl />
    </div>
  )
};

export default CropperToUrlExample;
