
import {useState} from 'react';
import {CORE_CONCEPTS} from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcepts_ from "./components/CoreConcepts_.jsx";
import TabButton from "./components/TabButton.jsx";
import {EXAMPLES} from "./data.js"

function App() {
  const [selectedTopic,setSelectedTopic]= useState();

  function handleSelect(selectedButton){
   setSelectedTopic(selectedButton);
   console.log(selectedTopic);
}
let tabContent= <p>pls. select</p>
 if (selectedTopic){
  tabContent = (
<div id='tab-content'>
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre><code> {EXAMPLES[selectedTopic].code}</code></pre> </div>)
 }
  return (
    <div>
    
      <Header />
     
      <main>
        <section id="core-concepts">
        <h2>Core concepts!</h2>
        <ul>
        {CORE_CONCEPTS.map((conceptItem)=>(
          <CoreConcepts_ key={conceptItem.title}{...conceptItem}/>
        ))}
       
      
        </ul>
        </section>
        <section id = "examples">
          <h2>Examples</h2>
          <menu>
           
            <TabButton isSelected={setSelectedTopic=== "components"} onSelect = {()=>handleSelect('components')}> Components </TabButton>
            <TabButton isSelected={setSelectedTopic=== "jsx"}onSelect = {()=>handleSelect("jsx")}> JSX </TabButton>
            <TabButton isSelected={setSelectedTopic=== "props"}onSelect = {()=>handleSelect('props')}> Props </TabButton>
            <TabButton isSelected={setSelectedTopic=== "state"}onSelect = {()=>handleSelect("state")}> State </TabButton>
          </menu>
          {tabContent}

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

    /////////// other way to write above code
       {!selectedTopic? <p>pls select a topic</p> :null} 
          { selectedTopic? (
          <div id='tab-content'>
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre><code> {EXAMPLES[selectedTopic].code}</code></pre> </div>
        ) :null}
    //////////////////////
///other option
          {!selectedTopic && <p>pls select a topic</p>} 
          { selectedTopic && (
          <div id='tab-content'>
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre><code> {EXAMPLES[selectedTopic].code}</code></pre> </div>
        ) }

*/
