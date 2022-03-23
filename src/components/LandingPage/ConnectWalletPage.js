import React from "react";
import "./ConnectWalletPageStyles.css";
import Wallet from "./wallet";


const ConnectMetaMaskSection = () => {
  return (
    <div className="WalletSection">
      <h1 className="Heading1">Lets Connect your MetaMask Wallet!</h1>
      <hr color="white" width="45%" className="underline"></hr>
      <div className="MetaMaskIcon">
        <img src="https://cdn.consensys.net/uploads/metamask-1.svg" />
      </div>
      <div className="MetaMaskDesc">
        <h1>
          MetaMask is a software cryptocurrency wallet used to interact with the
          Ethereum blockchain. It allows users to access their Ethereum wallet
          through a browser extension or mobile app, which can then be used to
          interact with decentralized applications
        </h1>
      </div>
      <div className="ConnectButton">
        <Wallet />
      </div>
    </div>
  );
};

export default ConnectMetaMaskSection;
