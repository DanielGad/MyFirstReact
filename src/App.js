import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Services from './Components/Service';
import About from './Components/About';
import Contact from './Components/Contact';
import Blog from './Components/Blog';
import BlogDetails from './Components/BlogDetails';
import ServiceDetails from './Components/ServiceDetails';
import AboutDetails from './Components/AboutDetails';
import HomeDetails from './Components/HomeDetails';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home/:id">
              <HomeDetails />
            </Route>
            <Route exact path="/service">
              <Services />
            </Route>
            <Route exact path="/services/:id">
              <ServiceDetails />
            </Route>
            <Route exact path="/blog">
              <Blog />
            </Route>
            <Route exact path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/about/:id">
              <AboutDetails />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
    </div>
    </Router>
    
  );
}

export default App;
