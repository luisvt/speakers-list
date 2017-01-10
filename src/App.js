import React, { Component } from 'react';
import './App.css';
import Nav from "./components/Nav.js";
import Footer from "./components/Footer.js";
import Intro from "./components/Intro.js";
import SpeakerList from "./components/SpeakerList.js";
import Search from "./components/Search.js";
import RegistrationForm from "./components/RegistrationForm.js";
import axios from "axios";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      speakers: [
        {
          name: 'Speaker 1',
          technologies: ['React', 'Angular', 'Node'],
          topics: ['Front End Development', 'Responsive Design', 'Accessibility'],
          contact: 'speaker1@test.com'
        },
        {
          name: 'Speaker 2',
          technologies: ['Tableau'],
          topics: ['Data Visualization', 'Tableau'],
          contact: 'speaker2@test.com'
        },
        {
          name: 'Speaker 3',
          technologies: ['D3', 'Python', 'R'],
          topics: ['Database', 'Data Analytics', 'Data Visualization'],
          contact: 'speaker3@test.com'
        },
        {
          name: 'Speaker 4',
          technologies: ['Python', 'C++', 'JavaScript'],
          topics: ['Data Science', 'Computational Science'],
          contact: 'speaker4@test.com'
        },
        {
          name: 'Speaker 5',
          technologies: ['HTML', 'CSS', 'Sass', 'JavaScript'],
          topics: ['UI', 'UX'],
          contact: 'speaker5@test.com'
        },
        {
          name: 'Speaker 6',
          technologies: [],
          topics: ['Mentoring', 'Negotiation', 'Public Speaking'],
          contact: 'speaker6@test.com'
        },
        {
          name: 'Speaker 7',
          technologies: ['Ruby', 'Rails'],
          topics: ['Back End'],
          contact: 'speaker7@test.com'
        },
        {
          name: 'Speaker 8',
          technologies: ['JavaScript', 'Python', 'Django', 'Rails'],
          topics: ['Full Stack Development', 'UX'],
          contact: 'speaker8@test.com'
        },
        {
          name: 'Speaker 9',
          technologies: ['Scala', 'R', 'JavaScript', 'Python'],
          topics: ['Data Science', 'Cybersecurity'],
          contact: 'speaker9@test.com'
        }
      ]
    };
  }

  handleUserInput(search) {
    this.setState({ search });
  }

  render() {
    return (
      <main>
        <Nav />
        <div className="compent-wrapper">
          <Intro />
          <Search search={this.state.search}    onUserInput={this.handleUserInput.bind(this)}/>
          <SpeakerList { ...this.state }/>
        </div>
        <Footer />
      </main>
    )
  }
}



export default App;
