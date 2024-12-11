
import {useState} from 'react';
import {CORE_CONCEPTS} from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcepts_ from "./components/CoreConcepts_.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  const [selectedTopic,setSelectedTopic]= useState('Please click button');

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
           
            <TabButton onSelect = {()=>handleSelect('Components Selected')}> Components </TabButton>
            <TabButton onSelect = {()=>handleSelect("JSX Selected")}> JSX </TabButton>
            <TabButton onSelect = {()=>handleSelect('Props Selected men!')}> Props </TabButton>
            <TabButton onSelect = {()=>handleSelect("Selected State!")}> State </TabButton>
          </menu>
          {selectedTopic}

        </section>
      </main>
    </div>
  );
}

export default App;

// importing header and core concept. created separated folder
