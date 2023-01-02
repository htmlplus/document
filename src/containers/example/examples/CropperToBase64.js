/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Center, Cropper } from '@htmlplus/react';
const CropperToBase64 = () => {
  const toBase64 = () => {
    const image = new Image();
    image.src = window.cropper1.toCanvas().toDataURL();
    const tab = window.open('', '_blank');
    tab.onload = () => {
      tab.document.write(image.outerHTML);
    };
  };
  return (
    <>
      <Center>
        <Cropper
          src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
          id="cropper1"
        ></Cropper>
      </Center>
      <br />
      <Center>
        <button onClick={() => toBase64()}>Get Base64</button>
      </Center>
    </>
  );
};

const CropperToBase64Example = () => {
  return (
    <div className="ex-cropper-to-base64">
      <CropperToBase64 />
    </div>
  )
};

export default CropperToBase64Example;
