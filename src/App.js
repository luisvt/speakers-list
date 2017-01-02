import React, { Component } from 'react';
import './App.css';
import Nav from "./components/Nav.js";
import Footer from "./components/Footer.js";
import Intro from "./components/Intro.js";
import SpeakerList from "./components/SpeakerList.js";
import Search from "./components/Search.js";
import RegistrationForm from "./components/RegistrationForm.js";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      speakers: [
        {
          name: 'Speaker 1',
          technologies: ['React', 'Angular', 'Node'],
          topics: ['Front End Development', 'Responsive Design'],
          contact: 'speaker1@test.com',
          social: [
            { twitter: '@speaker1'}
          ]
        },
        {
          name: 'Speaker 2',
          technologies: ['PHP', 'SQL'],
          topics: ['Database Topics', 'Server Topics'],
          contact: 'speaker2@test.com',
          social: [
            { twitter: '@speaker2'}
          ]
        },
        {
          name: 'Speaker 3',
          technologies: ['PHP', 'SQL'],
          topics: ['Database Topics', 'Server Topics'],
          contact: 'speaker2@test.com',
          social: [
            { twitter: '@speaker2'}
          ]
        },
        {
          name: 'Speaker 4',
          technologies: ['PHP', 'SQL'],
          topics: ['Database Topics', 'Server Topics'],
          contact: 'speaker2@test.com',
          social: [
            { twitter: '@speaker2'}
          ]
        },
        {
          name: 'Speaker 5',
          technologies: ['PHP', 'SQL'],
          topics: ['Database Topics', 'Server Topics'],
          contact: 'speaker2@test.com',
          social: [
            { twitter: '@speaker2'}
          ]
        },
        {
          name: 'Speaker 6',
          technologies: ['PHP', 'SQL'],
          topics: ['Database Topics', 'Server Topics'],
          contact: 'speaker2@test.com',
          social: [
            { twitter: '@speaker2'}
          ]
        },
        {
          name: 'Speaker 7',
          technologies: ['PHP', 'SQL'],
          topics: ['Database Topics', 'Server Topics'],
          contact: 'speaker2@test.com',
          social: [
            { twitter: '@speaker2'}
          ]
        },
        {
          name: 'Speaker 8',
          technologies: ['PHP', 'SQL'],
          topics: ['Database Topics', 'Server Topics'],
          contact: 'speaker2@test.com',
          social: [
            { twitter: '@speaker2'}
          ]
        },
        {
          name: 'Speaker 9',
          technologies: ['PHP', 'SQL'],
          topics: ['Database Topics', 'Server Topics'],
          contact: 'speaker2@test.com',
          social: [
            { twitter: '@speaker2'}
          ]
        },
        {
          name: 'Speaker 10',
          technologies: ['PHP', 'SQL'],
          topics: ['Database Topics', 'Server Topics'],
          contact: 'speaker2@test.com',
          social: [
            { twitter: '@speaker2'}
          ]
        },
        {
          name: 'Speaker 11',
          technologies: ['PHP', 'SQL'],
          topics: ['Database Topics', 'Server Topics'],
          contact: 'speaker2@test.com',
          social: [
            { twitter: '@speaker2'}
          ]
        },
        {
          name: 'Speaker 12',
          technologies: ['PHP', 'SQL'],
          topics: ['Database Topics', 'Server Topics'],
          contact: 'speaker2@test.com',
          social: [
            { twitter: '@speaker2'}
          ]
        },
        {
          name: 'Speaker 13',
          technologies: ['PHP', 'SQL'],
          topics: ['Database Topics', 'Server Topics'],
          contact: 'speaker2@test.com',
          social: [
            { twitter: '@speaker2'}
          ]
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
          <RegistrationForm />
        </div>
        <Footer />
      </main>
    )
  }
}

export default App;
