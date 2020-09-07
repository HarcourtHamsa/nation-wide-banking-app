import React, {useEffect} from 'react';
import Navbar from '../layouts/Navbar';
import Jumbotron from '../layouts/Jumbotron';
import InfoCard from '../layouts/InfoCard';
import Footer from '../layouts/Footer';
import Card from '../layouts/Card';

function Landing () {
  useEffect (() => {
    document.title = 'Nation wide - #1 Banking App';
  });
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
