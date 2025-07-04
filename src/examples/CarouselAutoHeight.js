/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/carousel-button.js';
import '@htmlplus/ui/carousel-slide.js';
import '@htmlplus/ui/carousel-slides.js';
import '@htmlplus/ui/carousel.js';

function App() {
  return (
    <plus-carousel variant="presentation" auto-height>
      <plus-carousel-slides>
        <plus-carousel-slide
          style={{
            height: '12rem'
          }}
        >
          1
        </plus-carousel-slide>
        <plus-carousel-slide
          style={{
            height: '15rem'
          }}
        >
          2
        </plus-carousel-slide>
        <plus-carousel-slide
          style={{
            height: '10rem'
          }}
        >
          3
        </plus-carousel-slide>
        <plus-carousel-slide
          style={{
            height: '14rem'
          }}
        >
          4
        </plus-carousel-slide>
        <plus-carousel-slide
          style={{
            height: '12rem'
          }}
        >
          5
        </plus-carousel-slide>
      </plus-carousel-slides>
      <plus-carousel-button type="previous"></plus-carousel-button>
      <plus-carousel-button type="next"></plus-carousel-button>
    </plus-carousel>
  );
}

const CarouselAutoHeight = () => {
  return (
    <div className="ex-preview ex-carousel-auto-height">
      <App />
    </div>
  )
};

export default CarouselAutoHeight;
