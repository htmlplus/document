/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { useRef } from 'react';

import { Card, Center, Faker, Intersection, Sticky } from '@htmlplus/react';

function App() {
  const statusRef = useRef();
  function onChange(event) {
    statusRef.current.innerHTML = event.detail.isIntersecting ? 'In Viewport' : 'Out of Viewport';
  }
  return (
    <div className="container">
      <Sticky top="1rem" zIndex={1}>
        <Center>
          <div className="status" ref={statusRef}></div>
        </Center>
      </Sticky>
      <Intersection onChange={onChange}>
        <Card elevation={10}>
          <Card.Body>
            <Faker></Faker>
          </Card.Body>
        </Card>
      </Intersection>
    </div>
  );
}

const IntersectionDefaultExample = () => {
  return (
    <div className="ex-intersection-default dock">
      <App />
      <style>{`.ex-intersection-default .container {  background-color: whitesmoke;  height: 20rem;  overflow: auto;}.ex-intersection-default .status {  color: white;  background-color: black;  padding: 0.5rem 1rem;  border-radius: 2rem;}.ex-intersection-default plus-card {  width: 15rem;  margin: auto;}.ex-intersection-default plus-intersection {  display: block;  margin: 40rem auto;}`}</style>
    </div>
  )
};

export default IntersectionDefaultExample;
