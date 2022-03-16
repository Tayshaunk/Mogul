import React from "react";
import Navbar from "../components/Navbar";
import Minter from "../components/minter";
import ConnectMetaMaskSection from "../components/ConnectWalletPage";
const Playgame = () => {
  return (
    <div>
      <Navbar />

      <ConnectMetaMaskSection />
    </div>
  );
};

export default Playgame;
