import React from "react";
import Navbar from "../components/Navbar";
import Video from "../components/Video";
import Overview from "../components/GameOverview";
import FazeParts from "../components/Fazes";
import Team from "../components/ourteam";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Video />
      <Overview />
      <hr color="white" width="75%"></hr>
      {/* <FazeParts /> */}
      <Team />
      <Footer />
    </div>
  );
};
export default Home;
