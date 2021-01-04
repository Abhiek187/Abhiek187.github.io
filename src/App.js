import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Route, Link, Switch, withRouter } from 'react-router-dom';
//import SwipeableRoutes from 'react-swipeable-routes';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './App.css';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

let navbar;
let navPosition;

const App = ({ match, location, history }) => {
  // Determines which direction to slide the components
  const [slideDirection, setSlideDirection] = useState('left');

  useEffect(() => {
    // Change the title of the tab every page change
    if (window.location.pathname === '/') {
      document.querySelector('title').textContent = 'Abhishek Chaudhuri - Home';
    } else if (window.location.pathname !== '/about' && window.location.pathname !== '/projects' &&
      window.location.pathname !== '/contact' && window.location.pathname !== '/Memory-Game' &&
      window.location.pathname !== '/frontend-nanodegree-arcade-game' &&
      window.location.pathname !== '/Neighborhood-Map') {
      document.querySelector('title').textContent = 'Abhishek Chaudhuri - Error';
    }

    // Check where web scroll is for sticky navbar
    navbar = document.querySelector('.links');
    navPosition = navbar.offsetTop;
  }, []); // only componentDidMount()

  const checkScroll = () => {
    // If scroll position is beyond the navbar, make it sticky
    navbar = document.querySelector('.links');
    // Don't set navPosition to 0
    navPosition = navbar.offsetTop === 0 ? navPosition : navbar.offsetTop;
    window.pageYOffset >= navPosition ?
      navbar.classList.add('sticky') : navbar.classList.remove('sticky');
  };

  window.onscroll = checkScroll;

  const setSlider = dest => {
    // Check where to slide the components
    if (window.location.pathname === '/contact') {
      // At Contact, always slide right
      setSlideDirection('right');
    } else if (window.location.pathname === '/projects') {
      // At Projects, check which link was clicked
      if (dest === 'about') {
        setSlideDirection('right');
      } else {
        setSlideDirection('left');
      }
    } else {
      // At About, always slide left (default)
      setSlideDirection('left');
    }
  };

  return (
    <div className="App">
      <header className="heading">
        <h1 className="heading-name" tabIndex={0}>Abhishek Chaudhuri</h1>
        {/* Add tabIndex to important information */}
        <h2 className="heading-headline" tabIndex={0}>
          Computer Engineering & Science Student at Rutgers University - New Brunswick
        </h2>
      </header>
      <nav className="links">
        {/* Redirect routes without reloading the browser */}
        <Link className="links-about" to="/about"
          onClick={() => setSlider('about')}>About</Link>
        <Link className="links-projects" to="/projects"
          onClick={() => setSlider('projects')}>Projects</Link>
        <Link className="links-contact" to="/contact"
          onClick={() => setSlider('contact')}>Contact</Link>
      </nav>
      <hr/>
      <TransitionGroup className={`transition-group ${slideDirection}`}>
        <CSSTransition key={location.key} timeout={{ enter: 600, exit: 600 }}
          classNames={'slide'}>
          <Switch location={location}>
            {/* Ensure route works with any website url */}
            <Route exact path={`${process.env.PUBLIC_URL}/`} render={() => (
              /* Default page */
              <main className="home">
                <p className="home-info" tabIndex={0}>
                  Hello and welcome to my website!
                  Please click the links above for more info about me.
                </p>
              </main>
            )}/>
            <Route path={`${process.env.PUBLIC_URL}/about`} render={() => (
              <About onClickLink={setSlider}/>
            )}/>
            <Route path={`${process.env.PUBLIC_URL}/projects`} render={() => (
              <Projects onClickLink={setSlider}/>
            )}/>
            <Route path={`${process.env.PUBLIC_URL}/contact`} render={() => (
              <Contact onClickLink={setSlider}/>
            )}/>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      {/* Ignore paths that take you to other repos, otherwise redirect to error page */}
      {window.location.pathname !== '/' && window.location.pathname !== '/about' &&
        window.location.pathname !== '/projects' && window.location.pathname !== '/contact' &&
        window.location.pathname !== '/Memory-Game' &&
        window.location.pathname !== '/frontend-nanodegree-arcade-game' &&
        window.location.pathname !== '/Neighborhood-Map' && <Route render={() => (
        <main className="error">
          <p className="error-message" tabIndex={0}>
            Whoops! That path is invalid. Please click the links above.
          </p>
        </main>
      )}/>}
      <hr/>
      <footer className="foot">
        <span className="foot-left">
          Made using <a className="foot-react" href="https://reactjs.org/" target="_blank"
            rel="noopener noreferrer">React</a>
          <img className="foot-react-img" src="/img/logo.svg" alt="React logo (an atom)"/>
        </span>
        <span className="foot-right">
          <a className="foot-mit" target="_blank" rel="noopener noreferrer"
            href="https://github.com/Abhiek187/abhiek187.github.io/blob/dev/LICENSE">
            MIT License</a> Copyright &copy; 2019 Abhishek Chaudhuri
        </span>
      </footer>
    </div>
  );
};

App.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(App); // Get access to match, location, and history
