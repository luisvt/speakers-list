import React from 'react';

const Speaker = ({speaker, tech, topic}) => {
  return (
    <li className="speakers">
      <ul className="speaker-details">
        <li>{speaker.name}</li>
        <li>{tech}</li>
        <li>{topic}</li>
        <li>{speaker.contact}</li>
      </ul>
    </li>
  )
}

export default Speaker;
