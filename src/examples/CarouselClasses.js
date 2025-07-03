/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/carousel-button.js';
import '@htmlplus/ui/carousel-slide.js';
import '@htmlplus/ui/carousel-slides.js';
import '@htmlplus/ui/carousel.js';

function App() {
  return (
    <plus-carousel variant="presentation" classes>
      <plus-carousel-slides>
        <plus-carousel-slide>1</plus-carousel-slide>
        <plus-carousel-slide>2</plus-carousel-slide>
        <plus-carousel-slide>3</plus-carousel-slide>
        <plus-carousel-slide>4</plus-carousel-slide>
        <plus-carousel-slide>5</plus-carousel-slide>
      </plus-carousel-slides>
      <plus-carousel-button type="previous"></plus-carousel-button>
      <plus-carousel-button type="next"></plus-carousel-button>
    </plus-carousel>
  );
}

const CarouselClasses = () => {
  return (
    <div className="ex-preview ex-carousel-classes">
      <App />
      <style>{`.ex-carousel-classes { plus-carousel-slide {  flex-basis: 70% !important;  transition: opacity 0.25s ease-in-out;}plus-carousel-slide:not(.snapped) {  opacity: 0.25;} }`}</style>
    </div>
  )
};

export default CarouselClasses;
