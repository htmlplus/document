/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Accordion, Faker } from '@htmlplus/react';
const AccordionCustomized = () => {
  return (
    <div>
      <Accordion summary="First">
        <Faker></Faker>
      </Accordion>
      <Accordion summary="Second">
        <Faker></Faker>
      </Accordion>
      <Accordion summary="Third">
        <Faker></Faker>
      </Accordion>
    </div>
  );
};

const AccordionCustomizedExample = () => {
  return (
    <div className="ex-accordion-customized">
      <AccordionCustomized />
      <style>{`.ex-accordion-customized plus-accordion {  border: 0;  border-radius: 0;}.ex-accordion-customized plus-accordion:not(:last-of-type) {  border-bottom: solid 2px lightgray;}.ex-accordion-customized plus-accordion::part(header),.ex-accordion-customized plus-accordion::part(body),.ex-accordion-customized plus-accordion::part(svg) {  transition: all 0.5s ease-out;}.ex-accordion-customized plus-accordion::part(header) {  column-gap: 0.5rem;  flex-direction: row-reverse;  padding-left: 0;}.ex-accordion-customized plus-accordion[state^='expand']::part(header) {  background-color: lightgray;  font-weight: bold;}.ex-accordion-customized plus-accordion[state^='expand']::part(svg) {  fill: gray;  transform: rotate(90deg);}.ex-accordion-customized plus-accordion[state^='collap']::part(svg) {  fill: gray;  transform: rotate(0deg);}`}</style>
    </div>
  )
};

export default AccordionCustomizedExample;
