/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Cropper, Grid } from '@htmlplus/react';

function App() {
  return (
    <Grid gutter="md">
      <Grid.Item xs="12" sm="6">
        <Cropper
          shape="rectangle"
          aspectRatio="2"
          src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
        ></Cropper>
      </Grid.Item>
      <Grid.Item xs="12" sm="6">
        <Grid gutter="md">
          <Grid.Item xs="12">
            <Cropper
              shape="square"
              src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
            ></Cropper>
          </Grid.Item>
          <Grid.Item xs="12">
            <Cropper
              shape="circle"
              src="https://fengyuanchen.github.io/cropperjs/images/picture.jpg"
            ></Cropper>
          </Grid.Item>
        </Grid>
      </Grid.Item>
    </Grid>
  );
}

const CropperShape = () => {
  return (
    <div className="ex-cropper-shape">
      <App />
      <style>{`.ex-cropper-shape plus-cropper[shape='rectangle'] {  height: 100%;}`}</style>
    </div>
  )
};

export default CropperShape;
