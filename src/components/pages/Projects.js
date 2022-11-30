
import React from 'react';
import photo1 from '../../photo/lolol.PNG'
import photo2 from '../../photo/digital-marketing-meeting.jpg'
import photo3 from '../../photo/motivate.png'
import photo4 from '../../photo/sched.png'
import photo5 from '../../photo/weather.png'
import photo6 from '../../photo/notes.png'
import photo7 from '../../photo/pokemon-shop.PNG'
export default function About() {
  const projects =[
    {
      img: photo1, link:"https://bloodcurdling-vampire-96793.herokuapp.com/", text: 'horiseon project' 
    },
    {
      img: photo2, link:"https://456salman.github.io/challenge-01/", text: 'challenge 1' 
    },
    {
      img: photo3, link:"https://esrawameed.github.io/Motivation-Locale/index.html", text: 'motivation project' 
    },
    {
      img: photo4, link:"https://456salman.github.io/schedudler/", text: 'schedudler' 
    },
    {
      img: photo5, link:"https://456salman.github.io/weather/", text: 'weather API' 
    },
    {
      img: photo6, link:"https://456salman.github.io/notesss/", text: 'notes maker' 
    },
    {
      img: photo7, link:"https://poke-shop00.herokuapp.com/Home", text: 'pokemon shop' 
    }
  ]
  return (
    <div>
      <h1>my projects</h1>
      <div>
      {projects.map(project=>(
        <section class="flex-box">
        <nav class="marketing">
         
       <a href={project.link}><img class="img" src={project.img} alt={project.text} id="marketing"/></a>
           <div class="bottom-left">{project.text}</div>
    </nav>
    </section>
      ))}
      </div>
      {/* <article id="work">
<h2>work</h2> */}
{/* <section class="flex-box">
    <nav class="marketing">

   <a href="https://456salman.github.io/challenge-01/"><img src="./asset/photo/digital-marketing-meeting.jpg" alt="Horseon" id="marketing"/></a>
       <div class="bottom-left">horiseon project</div>
</nav>
</section>

<section class="flex-box">
    <nav class="marketing">
   <a href="https://bloodcurdling-vampire-96793.herokuapp.com/"><img src={photo1} alt="Horseon" id="marketing"/></a>
       
       <div class="bottom-left">horiseon project</div>
</nav>
</section>
<section class="flex-box">
       <div id="image3">
    <img src="asset/photo/tech1.PNG" alt=""/>
    </div>
    <div class="bottom-left">coming soon</div>
</section>
  <section>
    <div id="image3">
    <img src="asset/photo/tech2.PNG" alt="coming soon"/>
</div>
<div class="bottom-left">coming soon</div>
</section> */}

{/* </article> */}
    </div>
  );
}
