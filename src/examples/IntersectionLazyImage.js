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
    <div className="ex-intersection-lazy-image dock">
      <App />
      <style>{`.ex-intersection-lazy-image .container {  position: relative;  height: 20rem;  overflow: auto;  background-color: whitesmoke;}.ex-intersection-lazy-image img {  width: 12rem;  height: 12rem;  object-fit: cover;  margin: 0;}.ex-intersection-lazy-image img:not([hidden]) {  display: block;}.ex-intersection-lazy-image plus-card {  display: inline-block;}.ex-intersection-lazy-image plus-intersection {  display: block;  text-align: center;  margin: 50rem auto;}.ex-intersection-lazy-image plus-spinner {  margin: 1rem;}`}</style>
    </div>
  )
};

export default IntersectionLazyImage;
