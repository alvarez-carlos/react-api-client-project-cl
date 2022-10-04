import React, { Fragment } from "react";
import {Hero, Trends, Collections, About, Stores} from '../components'
const Home = () => {
  return (
    <Fragment>
      <Hero />
      <Trends />
      <Collections />
      <About />
      <Stores />      
    </Fragment>
  );
};

export default Home;
