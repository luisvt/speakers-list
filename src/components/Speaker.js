import React from 'react';

const Speaker = ({speaker}) => {
  return (
    <li className="speakers">
      <ul className="speaker-details">
        <li>{speaker.name}</li>
        <li>{speaker.technologies}</li>
        <li>{speaker.topics}</li>
        <li>{speaker.contact}</li>
      </ul>
    </li>
  )
}

export default Speaker;
