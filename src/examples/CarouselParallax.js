/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/carousel-slide.js';
import '@htmlplus/ui/carousel-slides.js';
import '@htmlplus/ui/carousel.js';

function App() {
  return (
    <plus-carousel variant="presentation" draggable="snap" loop tween-factor-base={0.2}>
      <plus-carousel-slides>
        <plus-carousel-slide>
          <img src="https://picsum.photos/id/319/600/350" />
        </plus-carousel-slide>
        <plus-carousel-slide>
          <img src="https://picsum.photos/id/755/600/350" />
        </plus-carousel-slide>
        <plus-carousel-slide>
          <img src="https://picsum.photos/id/203/600/350" />
        </plus-carousel-slide>
        <plus-carousel-slide>
          <img src="https://picsum.photos/id/743/600/350" />
        </plus-carousel-slide>
        <plus-carousel-slide>
          <img src="https://picsum.photos/id/212/600/350" />
        </plus-carousel-slide>
      </plus-carousel-slides>
    </plus-carousel>
  );
}

const CarouselParallax = () => {
  return (
    <div className="ex-preview ex-carousel-parallax">
      <App />
      <style>{`.ex-carousel-parallax { plus-carousel-slide {  flex-basis: 80% !important;  overflow: hidden;}img {  display: block;  height: 100%;  width: 100%;  max-width: none;  flex: 0 0 calc(115% + (1rem * 2));  object-fit: cover;  transform: translateX(calc(var(--plus-carousel-factor-1) * -80%));} }`}</style>
    </div>
  )
};

export default CarouselParallax;
