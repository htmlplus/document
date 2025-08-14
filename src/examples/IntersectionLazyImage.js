/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/card.js';
import '@htmlplus/ui/intersection.js';
import '@htmlplus/ui/spinner.js';

function App() {
  function onPlusChange(event) {
    if (!event.detail.isIntersecting) return;
    setTimeout(() => {
      const image = event.target.querySelector('img');
      const spinner = event.target.querySelector('plus-spinner');
      const src = image.getAttribute('data-src');
      image.setAttribute('src', src);
      image.hidden = false;
      spinner.hidden = true;
    }, 1000);
  }
  return (
    <div className="container">
      <plus-intersection once onPlusChange={onPlusChange}>
        <plus-card elevation={10}>
          <plus-spinner></plus-spinner>
          <img alt="Lazy Image" hidden data-src="https://picsum.photos/id/25/200/200" />
        </plus-card>
      </plus-intersection>
    </div>
  );
}

const IntersectionLazyImage = () => {
  return (
    <div className="intersection-lazy-image">
      <App />
      <style>{`.intersection-lazy-image { .container {  position: relative;  height: 20rem;  overflow: auto;  background-color: whitesmoke;}img {  width: 12rem;  height: 12rem;  object-fit: cover;  margin: 0;}img:not([hidden]) {  display: block;}plus-card {  display: inline-block;}plus-intersection {  display: block;  text-align: center;  margin: 50rem auto;}plus-spinner {  margin: 1rem;} }`}</style>
    </div>
  )
};

export default IntersectionLazyImage;
