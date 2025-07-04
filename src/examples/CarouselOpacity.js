/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/carousel-button.js';
import '@htmlplus/ui/carousel-slide.js';
import '@htmlplus/ui/carousel-slides.js';
import '@htmlplus/ui/carousel.js';

function App() {
  return (
    <plus-carousel variant="presentation" draggable="free" tween-factor-base={0.84} loop>
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

const CarouselOpacity = () => {
  return (
    <div className="ex-preview ex-carousel-opacity">
      <App />
      <style>{`.ex-carousel-opacity { plus-carousel-slide {  flex-basis: 70% !important;  opacity: var(--plus-carousel-factor-2);} }`}</style>
    </div>
  )
};

export default CarouselOpacity;
