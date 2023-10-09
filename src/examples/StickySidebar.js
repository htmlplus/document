/**************************************************
 * THIS FILE IS AUTO-GENERATED, DO NOT EDIT MANUALY
 **************************************************/

import { Faker, Grid, Sticky } from '@htmlplus/react';

function App() {
  return (
    <div className="container">
      <header>Header</header>
      <Grid>
        <Grid.Item xs="7">
          <Faker api="lorem.paragraphs" arguments={[10, '\n\n']}></Faker>
        </Grid.Item>
        <Grid.Item xs="5">
          <br />
          <Sticky>
            <aside>A Sticky Sidebar</aside>
          </Sticky>
        </Grid.Item>
      </Grid>
    </div>
  );
}

const StickySidebarExample = () => {
  return (
    <div className="ex-sticky-sidebar">
      <App />
      <style>{`.ex-sticky-sidebar .container {  height: 20rem;  overflow: auto;}.ex-sticky-sidebar aside,.ex-sticky-sidebar header {  background: lightgray;  text-align: center;  padding: 1rem;}.ex-sticky-sidebar plus-faker {  display: block;  padding: 1rem;  text-align: justify;}`}</style>
    </div>
  )
};

export default StickySidebarExample;
