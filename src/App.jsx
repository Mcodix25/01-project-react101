
import {useState} from 'react';
import {CORE_CONCEPTS} from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcepts_ from "./components/CoreConcepts_.jsx";
import TabButton from "./components/TabButton.jsx";
import {EXAMPLES} from "./data.js"

function App() {
  const [selectedTopic,setSelectedTopic]= useState('components');

  function handleSelect(selectedButton){
   // console.log('Hello McRod + handleSellect is running');
   //tabContent=selectedButton;
   setSelectedTopic(selectedButton);
   console.log(selectedTopic);
}

console.log('APP COMPONENT EXECUTING');

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
           
            <TabButton onSelect = {()=>handleSelect('components')}> Components </TabButton>
            <TabButton onSelect = {()=>handleSelect("jsx")}> JSX </TabButton>
            <TabButton onSelect = {()=>handleSelect('props')}> Props </TabButton>
            <TabButton onSelect = {()=>handleSelect("state")}> State </TabButton>
          </menu>
          {selectedTopic}
          <div id='tab-content'>
          
          <h3>
           {EXAMPLES[selectedTopic].title}
          </h3>
          <p>
          {EXAMPLES[selectedTopic].description}
          </p>
          <pre>
          <code> {EXAMPLES[selectedTopic].code}</code>
          </pre> 
        </div>
       

        </section>
      </main>
    </div>
  );
}

export default App;


/*
   <div id='tab-content'>
          
            <h3>
             {EXAMPLES[selectedTopic].title}
            </h3>
            <p>
            {EXAMPLES[selectedTopic].description}
            </p>
            <pre>
            <code> {EXAMPLES[selectedTopic].code}</code>
            </pre> 
          </div>
*/
