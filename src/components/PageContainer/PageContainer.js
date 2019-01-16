import React from 'react';

//components
import Nav from '../Nav/Nav';
import '../../App.css';
import Landing from '../Landing/Landing';

const PageContainer = () => {
  return(
    <div id="main-container">
      <div id="content-wrapper">
        <Landing />
      </div>

    </div>
  )
}

export default PageContainer;
