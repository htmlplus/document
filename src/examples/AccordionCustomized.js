/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/accordion.js';
import '@htmlplus/ui/faker.js';

function App() {
  return (
    <div>
      <plus-accordion summary="First">
        <plus-faker></plus-faker>
      </plus-accordion>
      <plus-accordion summary="Second">
        <plus-faker></plus-faker>
      </plus-accordion>
      <plus-accordion summary="Third">
        <plus-faker></plus-faker>
      </plus-accordion>
    </div>
  );
}

const AccordionCustomized = () => {
  return (
    <div className="ex-accordion-customized">
      <App />
      <style>{`.ex-accordion-customized plus-accordion {  border: 2px solid whitesmoke;  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);}.ex-accordion-customized plus-accordion:not(:last-of-type) {  margin-bottom: 0.5rem;}.ex-accordion-customized plus-accordion::part(body),.ex-accordion-customized plus-accordion::part(svg) {  transition: all 0.5s ease-out;}.ex-accordion-customized plus-accordion::part(header) {  column-gap: 0.5rem;  flex-direction: row-reverse;  padding: 0.75rem;}.ex-accordion-customized plus-accordion[state^='expand']::part(header) {  font-weight: bold;}.ex-accordion-customized plus-accordion[state^='expand']::part(svg) {  fill: gray;  transform: rotate(90deg);}.ex-accordion-customized plus-accordion[state^='collap']::part(svg) {  fill: gray;  transform: rotate(0deg);}`}</style>
    </div>
  )
};

export default AccordionCustomized;
