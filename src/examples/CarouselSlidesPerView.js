/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/carousel-button.js';
import '@htmlplus/ui/carousel-slide.js';
import '@htmlplus/ui/carousel-slides.js';
import '@htmlplus/ui/carousel.js';

function App() {
  return (
    <plus-carousel variant="presentation" resizable>
      <plus-carousel-slides>
        <plus-carousel-slide>1</plus-carousel-slide>
        <plus-carousel-slide>2</plus-carousel-slide>
        <plus-carousel-slide>3</plus-carousel-slide>
        <plus-carousel-slide>4</plus-carousel-slide>
        <plus-carousel-slide>5</plus-carousel-slide>
        <plus-carousel-slide>6</plus-carousel-slide>
        <plus-carousel-slide>7</plus-carousel-slide>
        <plus-carousel-slide>8</plus-carousel-slide>
        <plus-carousel-slide>9</plus-carousel-slide>
      </plus-carousel-slides>
      <plus-carousel-button type="previous"></plus-carousel-button>
      <plus-carousel-button type="next"></plus-carousel-button>
    </plus-carousel>
  );
}

const CarouselSlidesPerView = () => {
  return (
    <div className="ex-preview ex-carousel-slides-per-view">
      <App />
      <style>{`.ex-carousel-slides-per-view { @media (min-width: 0px) {  plus-carousel-slide {    flex-basis: 100% !important;  }}@media (min-width: 750px) {  plus-carousel-slide {    flex-basis: 50% !important;  }}@media (min-width: 1200px) {  plus-carousel-slide {    flex-basis: calc(100% / 3) !important;  }} }`}</style>
    </div>
  )
};

export default CarouselSlidesPerView;
