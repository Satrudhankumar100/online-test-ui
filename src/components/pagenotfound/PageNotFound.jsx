// PageNotFound.jsx
import React from 'react';
import './PageNotFound.css';
import Header from '../header/Header';

const PageNotFound = () => {
  const imageUrl = "https://www.creativefabrica.com/wp-content/uploads/2022/02/24/Page-not-found-metaphor-page-Error-404-Graphics-25875767-1-580x386.png";

  return (
    <>
      <Header />
      <div className='imgContainer'>
        <img src={imageUrl} alt="404 Not Found" />
      </div>
    </>
  );
};

export default PageNotFound;
