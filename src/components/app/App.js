import React, { Component } from '../../../node_modules/react';
import './App.css';
import Header from '../Header/Header';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import ActorIn from '../ActorInput/actor-in';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Contact />
        <ActorIn />
        <Footer />
      </div>
    );
  }
}

export default App;
