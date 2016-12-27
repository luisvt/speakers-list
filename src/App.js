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
  constructor(props) {
    super(props);
    this.state = {
      speakers: [
        {
          id: 1,
          name: 'Speaker 1',
          technologies: ['React', 'Angular', 'Node'],
          topics: ['Front End Development', 'Responsive Design'],
          contact: 'speaker1@test.com',
          social: [
            { twitter: '@speaker1'}
          ]
        },
        {
          id: 2,
          name: 'Speaker 2',
          technologies: ['PHP', 'SQL'],
          topics: ['Database Topics', 'Server Topics'],
          contact: 'speaker2@test.com',
          social: [
            { twitter: '@speaker2'}
          ]
        }
      ]
    }
  }


  render() {
    return (
      <main>
        <Nav />
        <div className="compent-wrapper">
          <Intro />
          <Search />
          <Map />
          <SpeakerList { ...this.state }/>
          <RegistrationForm />
        </div>
        <Footer />
      </main>
    )
  }
}

export default App;
