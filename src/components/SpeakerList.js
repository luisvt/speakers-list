import React from 'react';
import Speaker from './Speaker.js';

const SpeakerList = (props) => {
  let filteredList = props.speakers.filter(
    (speaker) => {
      if (speaker.name.toLowerCase().indexOf(props.search.toLowerCase()) !== -1 ||
          speaker.contact.toLowerCase().indexOf(props.search.toLowerCase()) !== -1 ||
          speaker.technologies.join().toLowerCase().indexOf(props.search.toLowerCase()) !== -1 ||
          speaker.topics.join().toLowerCase().indexOf(props.search.toLowerCase()) !== -1 ) {
        return true;
      }
    }
  );

  const speakersDetails = filteredList.map((speaker, index) => {
    const tech = speaker.technologies.map((tech) =>
        <p key={tech} className="tech">{tech}</p>
    )

    const topic = speaker.topics.map((topic) =>
        <p key={topic} className="topic">{topic}</p>
    )

    return (
      <Speaker speaker={speaker} key={index} tech={tech} topic={topic} />
    )
  })

  return (
    <section className="speaker-container bottom-margin">
      <h2>Available Speakers</h2>
      <ul className="speaker-list">
        <li>
          <ul className="speaker-details table-header">
            <li>Name</li>
            <li>Languages</li>
            <li>Topics</li>
            <li>Contact</li>
          </ul>
        </li>
        { speakersDetails }
      </ul>
    </section>
  )
}

export default SpeakerList;
