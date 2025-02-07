/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import '@htmlplus/ui/stack.js';
import '@htmlplus/ui/switch.js';

function App() {
  return (
    <plus-stack gap="2rem">
      <plus-switch class="switch-1"></plus-switch>
      <plus-switch class="switch-2"></plus-switch>
    </plus-stack>
  );
}

const SwitchCustomized = () => {
  return (
    <div className="ex-preview ex-switch-customized">
      <App />
      <style>{`.ex-switch-customized .switch-1[aria-checked='false']::part(root) {  background: #28292c;}.ex-switch-customized .switch-1[aria-checked='false']::part(handle) {  background: #28292c;  box-shadow: inset calc(1.25em * 0.35) calc(1.25em * -0.075) 0 0 #d8dbe0;}.ex-switch-customized .switch-1[aria-checked='true']::part(root) {  background: #d8dbe0;}.ex-switch-customized .switch-1[aria-checked='true']::part(handle) {  background: #28292c;  box-shadow: none;}.ex-switch-customized .switch-2 {  border-radius: 2px;  transition: 0.6s ease all;  font-family: Arial, Helvetica, sans-serif;}.ex-switch-customized .switch-2::part(root) {  background: #ebf7fc;}.ex-switch-customized .switch-2[aria-checked]:not([aria-checked='false'])::part(root) {  background: #fcebeb;}.ex-switch-customized .switch-2::part(handle) {  background: #03a9f4;  transform: translateY(-50%) rotateY(-000deg);  transform-origin: 0% 50%;}.ex-switch-customized .switch-2[aria-checked]:not([aria-checked='false'])::part(handle) {  background-color: #f44336;  transform: translateY(-50%) rotateY(-180deg);}.ex-switch-customized .switch-2::part(root) {  perspective: 70px;}.ex-switch-customized .switch-2::part(slot) {  opacity: 1;  color: #4e4e4e;  font-size: 0.625em;  font-weight: bold;  text-align: center;  line-height: 1;}.ex-switch-customized .switch-2::part(on)::before {  content: 'YES';  left: 0.25em;}.ex-switch-customized .switch-2::part(off)::before {  content: 'NO';  right: 0.25em;}`}</style>
    </div>
  )
};

export default SwitchCustomized;
