import React from "react";
import Web3 from 'web3'


const Navbar = () => {


  let handleRWallet = async ()=> {
    console.log("Before web3 " )
    await window.ethereum.enable();
      // const web3 = await new Web3(Web3.givenProvider || 'http://3.6.164.8:8545')
   
  }

  return (
    <div className="flex py-5 border-b-2  items-center shadow-md justify-between px-5">
      <div className="flex   items-center  justify-between">

      <img src="/thumbnail.png" width={40} alt="" />
      <h1 className="text-xl mx-10 font-bold text-red-600">Samrachana Protocol - Unified Blood Bank Portal</h1>
      </div>
      <div className="flex text-sm items-center space-x-2">
      <button  className="bg-red-600 text-white   rounded-md py-2 px-4" onClick={handleRWallet()}>
              Connect Wallet
            </button>
      </div>
    </div>
  );
};

export default Navbar;
