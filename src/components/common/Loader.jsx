import React from 'react';
import './loader.scss'

const Loader = () => {
  return (
    <div>
      <div className='body'>
        <span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div className='base'>
          <span></span>
          <div className='face'></div>
        </div>
      </div>
      <div className='longfazers'>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <h1 className="redirectingH1">Redirecting</h1>
    </div>
  );
};

export default Loader;