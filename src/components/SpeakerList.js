import React from 'react';
import Speaker from './Speaker.js';

const SpeakerList = (props) => {
  const speakersDetails = props.speakers.map((speaker) => {
    return (
      <Speaker speaker={speaker} key={speaker.id}/>
    )
  })

  return (
    <div className="speaker-container">
      <h3>Speaker List</h3>
      <ul className="speaker-list">
        { speakersDetails }
      </ul>
    </div>
  )
}

export default SpeakerList;
