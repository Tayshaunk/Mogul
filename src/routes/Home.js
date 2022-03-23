import React from "react";
import Navbar from "../components/LandingPage/NavBar/Navbar";
import Video from "../components/LandingPage/Hero/Video"
import Overview from "../components/LandingPage/AboutGame/GameOverview"
import Team from "../components/LandingPage/OurTeam/ourteam"
import Footer from "../components/LandingPage/Footer/Footer"
const Home = () => {
  return (
    <div>
      <Navbar />
      <Video />
      <Overview />
      <hr color="white" width="75%"></hr>
      <Team />
      <Footer />
    </div>
  );
};
export default Home;
