// LoadingOverlay.js
import React from 'react';
import '../styles/loader.css'; // Import the CSS for the loading overlay
// import loadingGif from '/images/tractor.gif';

const LoadingOverlay = () => (
  <div className="centered-loading-overlay">
  <img className="loading-gif" src="/images/Sunns.gif" alt="Loading" width={"10%"}/>
  </div>
);

export default LoadingOverlay;
