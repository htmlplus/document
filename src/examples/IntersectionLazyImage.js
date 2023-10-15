/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Card, Intersection, Spinner } from '@htmlplus/react';

function App() {
  function onChange(event) {
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
      <Intersection once onChange={onChange}>
        <Card elevation={10}>
          <Spinner></Spinner>
          <img alt="Lazy Image" hidden data-src="https://placekitten.com/200/200" />
        </Card>
      </Intersection>
    </div>
  );
}

const IntersectionLazyImageExample = () => {
  return (
    <div className="ex-intersection-lazy-image dock">
      <App />
      <style>{`.ex-intersection-lazy-image .container {  position: relative;  height: 20rem;  overflow: auto;  background-color: whitesmoke;}.ex-intersection-lazy-image img {  width: 12rem;  height: 12rem;  object-fit: cover;  margin: 0;}.ex-intersection-lazy-image img:not([hidden]) {  display: block;}.ex-intersection-lazy-image plus-card {  display: inline-block;}.ex-intersection-lazy-image plus-intersection {  display: block;  text-align: center;  margin: 50rem auto;}.ex-intersection-lazy-image plus-spinner {  margin: 1rem;}`}</style>
    </div>
  )
};

export default IntersectionLazyImageExample;
