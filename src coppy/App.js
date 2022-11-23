import React, {useState} from "react";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const[page, setPage] = useState('about') 
  function renderPage(){
    if(page==='about') {
      return <About/>
     }
     else if (page==='contact'){
      return <Contact></Contact>
     }
    
  }
  return (
    <div>
      {renderPage()}
      <button onClick={()=>setPage('contact')}>change page</button>
    </div>
  )
}

export default App;
