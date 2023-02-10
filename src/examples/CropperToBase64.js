/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Center, Cropper } from '@htmlplus/react';
const CropperToBase64 = () => {
  const toBase64 = () => {
    const image = new Image();
    image.src = window.cropper2.toCanvas().toDataURL();
    const tab = window.open('', '_blank');
    setTimeout(() => {
      tab.document.write(image.outerHTML);
    }, 250);
  };
  return (
    <>
      <Center>
        <Cropper
          src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
          id="cropper2"
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
