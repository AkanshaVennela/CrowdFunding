import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Navbar from "../auth_pages/Navbar";
import { loadBlockchainData, loadWeb3 } from "../helpers/web3Helpers";

// starting page

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    loadWeb3();
  }, [window.ethereum]);
  useEffect(() => {
    loadBlockchainData(dispatch);
  }, [dispatch, window.ethereum]);
  return (
    <>
      <Navbar />
      <div className="starting__page">
        <center>
          <div className="cursive">
            <a>Blockchain Based Crowdfunding</a>
          </div>
          <div>
            <img src={require('../media/calculator.webp')} alt="banner image" style={{ width: '600px', height: 'auto', marginTop: '20vh' }} />

          </div>
        </center>
        
      </div>
    </>
  );
};

export default Home;
