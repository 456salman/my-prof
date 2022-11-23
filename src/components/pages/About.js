import React from 'react';
import myPic from '../../photo/avatar.PNG'
export default function Home() {
  return (
    <div>
      <h1>about</h1>
      <a><img class="img" src={myPic}/></a>

      <p>
      Hey my name is salman this is my portfolio and i will be talking about myself. I am a mechanic that is trying to become a programmer. The reason I wanted to program was because it interested me and looked fun. So I took the fullstack class and it was amazing and fun. I learned  front end and back end js and css. I feel that after finishing this class I will be ready for a programming job.
      </p>
    </div>
  );
}
