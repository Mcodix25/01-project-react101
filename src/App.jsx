

import {CORE_CONCEPTS} from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcepts_ from "./components/CoreConcepts_.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {

  function handleSelect(){
    console.log('Hello McRod + handleSellect is running');
}

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
        
        
      
        </ul>
        </section>
        <section id = "examples">
          <h2>Examples</h2>
          <menu>
           
            <TabButton onSelect = {handleSelect}> Components </TabButton>
            <TabButton onSelect = {handleSelect}> JSX </TabButton>
            <TabButton onSelect = {handleSelect}> Props </TabButton>
            <TabButton onSelect = {handleSelect}> State </TabButton>
          </menu>
          Dynamic Content

        </section>
      </main>
    </div>
  );
}

export default App;

// importing header and core concept. created separated folder
