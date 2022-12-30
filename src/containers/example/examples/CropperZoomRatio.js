/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Cropper, Grid } from '@htmlplus/react';
const CropperZoomRatio = () => {
  return (
    <Grid gutter="md">
      <Grid.Item xs="12" sm="6">
        <Cropper
          zoomable
          zoomRatio="0.1"
          src="/assets/images/panda.jpg"
        ></Cropper>
      </Grid.Item>
      <Grid.Item xs="12" sm="6">
        <Cropper
          zoomable
          zoomRatio="1.0"
          src="/assets/images/panda.jpg"
        ></Cropper>
      </Grid.Item>
    </Grid>
  );
};

const CropperZoomRatioExample = () => {
  return (
    <div className="ex-cropper-zoom-ratio">
      <CropperZoomRatio />
    </div>
  )
};

export default CropperZoomRatioExample;
