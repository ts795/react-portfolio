import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./components/pages/AboutMe";
import Portfolio from "./components/pages/Portfolio";
import Resume from "./components/pages/Resume";
import Contact from "./components/pages/Contact";
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div id="app-root">
        <Header />
        <Route exact path="/aboutme" component={AboutMe} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/react-portfolio" component={AboutMe} />
        <Route exact path="/" component={AboutMe} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
