import React from 'react';
import "./Loader.scss";



const Loader = () => {
  return (
    <div>
        <div className="spinner">
          <div className="bounce1"></div>
          <div className="bounce2"></div>
          <div className="bounce3"></div>
        </div>
    </div>
  );
};

export default Loader;