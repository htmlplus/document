/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/aspect-ratio.js';
import '@htmlplus/ui/grid-item.js';
import '@htmlplus/ui/grid.js';

function App() {
  return (
    <plus-grid>
      <plus-grid-item xs="12" sm="6">
        <plus-grid>
          <plus-grid-item xs="12">
            <plus-aspect-ratio value="3/2" class="ratio-one">
              <div className="box one">3/2</div>
            </plus-aspect-ratio>
          </plus-grid-item>
          <plus-grid-item xs="12">
            <plus-aspect-ratio value="16/9">
              <div className="box two">16/9</div>
            </plus-aspect-ratio>
          </plus-grid-item>
        </plus-grid>
      </plus-grid-item>
      <plus-grid-item xs="12" sm="6">
        <plus-grid>
          <plus-grid-item xs="6">
            <plus-aspect-ratio value="1">
              <div className="box three">1/1</div>
            </plus-aspect-ratio>
          </plus-grid-item>
          <plus-grid-item xs="6" align-self="end">
            <plus-aspect-ratio value="4/3">
              <div className="box four">4/3</div>
            </plus-aspect-ratio>
          </plus-grid-item>
          <plus-grid-item xs="12">
            <plus-aspect-ratio value="18/6">
              <div className="box five">18/6</div>
            </plus-aspect-ratio>
          </plus-grid-item>
        </plus-grid>
      </plus-grid-item>
    </plus-grid>
  );
}

const AspectRatioMore = () => {
  return (
    <div className="ex-preview ex-aspect-ratio-more">
      <App />
      <style>{`.ex-aspect-ratio-more .box {  color: white;  padding: 0.75rem;  margin: 0.25rem;}.ex-aspect-ratio-more .ratio-one {  width: 40.625%;  float: right;}.ex-aspect-ratio-more .one {  background: #08dfc8;}.ex-aspect-ratio-more .two {  background: #ff5449;}.ex-aspect-ratio-more .three {  background: #5f9ee9;}.ex-aspect-ratio-more .four {  background: #ffc903;}.ex-aspect-ratio-more .five {  background: #9073c1;}`}</style>
    </div>
  )
};

export default AspectRatioMore;
