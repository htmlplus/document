/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Cropper, Grid } from '@htmlplus/react';
const CropperZoomable = () => {
  return (
    <Grid gutter="md">
      <Grid.Item xs="12" sm="6">
        <Cropper zoomable="false" src="/assets/images/panda.jpg"></Cropper>
      </Grid.Item>
      <Grid.Item xs="12" sm="6">
        <Cropper zoomable="true" src="/assets/images/panda.jpg"></Cropper>
      </Grid.Item>
      <Grid.Item xs="12" sm="6">
        <Cropper zoomable="touch" src="/assets/images/panda.jpg"></Cropper>
      </Grid.Item>
      <Grid.Item xs="12" sm="6">
        <Cropper zoomable="wheel" src="/assets/images/panda.jpg"></Cropper>
      </Grid.Item>
    </Grid>
  );
};

const CropperZoomableExample = () => {
  return (
    <div className="ex-cropper-zoomable">
      <CropperZoomable />
    </div>
  )
};

export default CropperZoomableExample;
