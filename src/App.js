import React, { useEffect } from 'react';
import twitterLogo from './assets/twitter-logo.svg';
import './App.css';


// Constants
const TWITTER_HANDLE = 'ryzncodes';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {

  /* checkIfWalletIsConnected is to check if the window is connected
  to the Phantom wallet. The wallet are used for solana web3 app.  */
  const checkIfWalletIsConnected = async () => {
    try {
      const { solana } = window;
      
      if (solana) {
        if (solana.isPhantom) {
          console.log('Phantom wallet found!');
        }
      } else {
        alert('Solana wallet not found! Install Phantom Wallet to be connected.');
      }
    } catch (error) {
      console.error(error);
    }
  };


/**When webpage first loads, useEffect will run once to run the
 * checkIf.. to see if wallet connected or not.
 */
  useEffect(() => {
    const onLoad = async () => {
      await checkIfWalletIsConnected();
    };
    window.addEventListener('load', onLoad);
    return () => window.removeEventListener ('load', onLoad);
  }, []);  

  return (
    <div className="App">
      <div className="container">
        <div className="header-container">
          <p className="header">🖼 GIF Browser</p>
          <p className="sub-text">
            View your GIF collection in the metaverse ✨
          </p>
        </div>
        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`built on @${TWITTER_HANDLE}`}</a>
        </div>
      </div>
    </div>
  );
};

export default App;
