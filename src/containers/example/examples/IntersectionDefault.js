/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { useState } from 'react';
import { Card, Intersection } from '@htmlplus/react';
const IntersectionDefault = () => {
  const [intersecting, setIntersecting] = useState(false);
  const onChange = (event) => {
    setIntersecting(event.detail.isIntersecting);
  };
  return (
    <div className="container">
      <div className="status">
        {intersecting ? 'In Viewport' : 'Out of Viewport'}
      </div>
      <div className="content">
        <Intersection onChange={(event) => onChange(event)}>
          <Card elevation="10">
            <Card.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Card.Body>
          </Card>
        </Intersection>
      </div>
    </div>
  );
};

const IntersectionDefaultExample = () => {
  return (
    <div className="ex-intersection-default dock">
      <IntersectionDefault />
      <style>{`.ex-intersection-default .container {  position: relative;  background-color: #eeeeee;}.ex-intersection-default .status {  color: #fafafa;  background-color: black;  position: absolute;  top: 1rem;  left: 50%;  transform: translateX(-50%);  padding: 0.5rem 1rem;  border-radius: 2rem;  z-index: 1;}.ex-intersection-default .content {  height: 20rem;  overflow: auto;}.ex-intersection-default plus-card {  width: 15rem;  margin: auto;}.ex-intersection-default plus-intersection {  display: block;  margin: 40rem auto;}`}</style>
    </div>
  )
};

export default IntersectionDefaultExample;