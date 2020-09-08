import React from 'react';
import Navbar from '../layouts/Navbar';
import Jumbotron from '../layouts/Jumbotron';
import InfoCard from '../layouts/InfoCard';
import Footer from '../layouts/Footer';
import Card from '../layouts/Card';

function Landing () {
  return (
    <React.Fragment>
      <InfoCard />
      <Navbar />
      <Jumbotron />
      <Card />
      <Footer />
    </React.Fragment>
  );
}

export default Landing;
