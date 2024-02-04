/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { useEffect, useRef } from 'react';

import '@htmlplus/core/card.js';
import '@htmlplus/core/intersection.js';
import '@htmlplus/core/spinner.js';

function App() {
  const intersectionRef = useRef();
  useEffect(() => {
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
    intersectionRef.current.addEventListener('plus-change', onPlusChange);
    return () => {
      intersectionRef.current.removeEventListener('plus-change', onPlusChange);
    };
  });
  return (
    <div className="container">
      <plus-intersection once ref={intersectionRef}>
        <plus-card elevation={10}>
          <plus-spinner></plus-spinner>
          <img alt="Lazy Image" hidden data-src="https://placekitten.com/200/200" />
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
