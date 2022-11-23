import React from 'react';
import resume from '../../components/RESUME.pdf'
import resumePic from '../../photo/resumee.png'
export default function Contact() {
  return (
    <div>
      <h1>Resume</h1>
      <p>
        <a href={resume} download>download resume</a>
        <a><img class="img" src={resumePic}/></a>

    
      </p>
    </div>
  );
}
