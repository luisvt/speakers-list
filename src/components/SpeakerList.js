import React from 'react';
import Speaker from './Speaker.js';

const SpeakerList = (props) => {
  let filteredList = props.speakers.filter(
    (speaker) => speaker.name.toLowerCase().indexOf(props.search.toLowerCase()) !== -1

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
    <div className="speaker-container">
      <h2>Speakers</h2>
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
    </div>
  )
}

export default SpeakerList;
