/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Cropper, Grid } from '@htmlplus/react';
const CropperBackground = () => {
  return (
    <Grid gutter="md">
      <Grid.Item xs="12" sm="6">
        <Cropper
          background={false}
          view="none"
          src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
        ></Cropper>
      </Grid.Item>
      <Grid.Item xs="12" sm="6">
        <Cropper
          background={true}
          view="none"
          src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
        ></Cropper>
      </Grid.Item>
    </Grid>
  );
};

const CropperBackgroundExample = () => {
  return (
    <div className="ex-cropper-background">
      <CropperBackground />
    </div>
  )
};

export default CropperBackgroundExample;
