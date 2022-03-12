// import { pinJSONToIPFS } from "./pinata.js";
// require("dotenv").config();
// const contractAddress = "0x4C4a07F737Bf57F6632B6CAB089B78f62385aCaE";
// const contractABI = require("../contract-abi.json");
// const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
// const { createAlchemyWeb5 } = require("@alch/alchemy-web5");
// const web5 = createAlchemyWeb5(alchemyKey);

// export const connectWallet = async () => {
//   if (window.ethereum) {
//     try {
//       const address = await window.ethereum.enable();
//       const obj = {
//         connectedStatus: true,
//         status: "",
//         address: address,
//       };
//       return obj;
//     } catch (error) {
//       return {
//         connectedStatus: false,
//         status: "🦊 Connect to Metamask using the button on the top right.",
//       };
//     }
//   } else {
//     return {
//       connectedStatus: false,
//       status:
//         "🦊 You must install Metamask into your browser: https://metamask.io/download.html",
//     };
//   }
// };

// async function loadContract() {
//   return new web5.eth.Contract(contractABI, contractAddress);
// }

// //export async function mintNFT(url, name, description) {
// export const mintNFT = async (url, name, description) => {
//   if (url.trim() == "" || name.trim() == "" || description.trim() == "") {
//     return {
//       success: false,
//       status: "❗Please make sure all fields are completed before minting.",
//     };
//   }

//   //make metadata
//   const metadata = new Object();
//   metadata.name = name;
//   metadata.image = url;
//   metadata.description = description;

//   const pinataResponse = await pinJSONToIPFS(metadata);
//   if (!pinataResponse.success) {
//     return {
//       success: false,
//       status: "😢 Something went wrong while uploading your tokenURI.",
//     };
//   }
//   const tokenURI = pinataResponse.pinataUrl;

//   window.contract = await loadContract();

//   const transactionParameters = {
//     to: contractAddress, // Required except during contract publications.
//     from: window.ethereum.selectedAddress, // must match user's active address.
//     data: window.contract.methods
//       .mintNFT(window.ethereum.selectedAddress, tokenURI)
//       .encodeABI(),
//   };

//   try {
//     const txHash = await window.ethereum.request({
//       method: "eth_sendTransaction",
//       params: [transactionParameters],
//     });
//     return {
//       success: true,
//       status:
//         "✅ Check out your transaction on Etherscan: https://ropsten.etherscan.io/tx/" +
//         txHash,
//     };
//   } catch (error) {
//     return {
//       success: false,
//       status: "😥 Something went wrong: " + error.message,
//     };
//   }
// };
