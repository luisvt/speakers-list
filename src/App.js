import React, { Component } from 'react';
import './App.css';
import Nav from "./components/Nav.js";
import Footer from "./components/Footer.js";
import Intro from "./components/Intro.js";
import SpeakerList from "./components/SpeakerList.js";
import Map from "./components/Map.js";
import Search from "./components/Search.js";
import RegistrationForm from "./components/RegistrationForm.js";


class App extends Component {
  render() {
    return (
      <main>
        <Nav />
        <div className="compent-wrapper">
          <Intro />
          <Search />
          <Map />
          <SpeakerList />
          <RegistrationForm />
        </div>
        <Footer />
      </main>
    )
  }
}

export default App;
