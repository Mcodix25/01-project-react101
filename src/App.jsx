

import {CORE_CONCEPTS} from "./data.js";
import Header from "./components/Header.jsx";
import CoreConcepts_ from "./components/CoreConcepts_.jsx";

/*
function CoreConcepts_({title,description,image}){
  return(
<li>
   <img src = {image} alt = {title}/> 
   <h3>{title}</h3>
   <p> {description}</p>

</li>

  );
}
*/
function App() {
  return (
    <div>
      <Header />
     
      <main>
        <section id="core-concepts">
        <h2>Core concepts!</h2>
        <ul>
        
        <CoreConcepts_ {...CORE_CONCEPTS[0]} />
        <CoreConcepts_ {...CORE_CONCEPTS[1]} />
        <CoreConcepts_ {...CORE_CONCEPTS[2]} />
        <CoreConcepts_ {...CORE_CONCEPTS[3]} />
        <CoreConcepts_ {...CORE_CONCEPTS[4]} />
        
      
        </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
