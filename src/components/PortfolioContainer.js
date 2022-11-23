import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';
import Project from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import github from '../../src/photo/github.png'
import linkin from '../../src/photo/linkedin.png'
import insta from '../../src/photo/instagram.png'

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Project />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
        <footer><a href='https://github.com/456salman?tab=repositories'><img  src={github} /></a>
        <a href='https://www.linkedin.com/in/salman-alamin-16320a167/'><img  src={linkin} /></a>
        <a href='https://www.instagram.com/'><img  src={insta} /></a></footer>
    </div>
  );
}
