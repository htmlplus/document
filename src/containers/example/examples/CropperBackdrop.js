/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Cropper, Grid } from '@htmlplus/react';
const CropperBackdrop = () => {
  return (
    <Grid gutter="md">
      <Grid.Item xs="12" sm="6">
        <Cropper backdrop={false} src="/assets/images/panda.jpg"></Cropper>
      </Grid.Item>
      <Grid.Item xs="12" sm="6">
        <Cropper backdrop={true} src="/assets/images/panda.jpg"></Cropper>
      </Grid.Item>
    </Grid>
  );
};

const CropperBackdropExample = () => {
  return (
    <div className="ex-cropper-backdrop">
      <CropperBackdrop />
    </div>
  )
};

export default CropperBackdropExample;
