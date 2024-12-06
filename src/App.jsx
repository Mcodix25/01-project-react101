import reactImage from "./assets/react-core-concepts.png";
import compImg from "./assets/components.png";
import {CORE_CONCEPTS} from "./data.js";


const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[genRandomInt(2)];
  return (
    <header>
      <img src={reactImage} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
      {description} Fundamental React concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}
////// removing props' word by applying destructuring (see right bellow)
function CoreConcepts_({title,description,image}){
  return(
<li>
   <img src = {image} alt = {title}/> 
   <h3>{title}</h3>
   <p> {description}</p>

</li>

/* 
function CoreConcepts_(props){
  return(
<li>
   <img src = {props.image} alt = {props.title}/> 
   <h3>{props.title}</h3>
   <p> {props.description}</p>

</li>

*/

// "alt"- means pag hindi nag load yung image na props.image, etong "alt yung lalabas".
// lahat na nadito sa <li> value hinugot dun sa baba sa "Function App" like image, description

  );
}

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
        
      
        </ul>
        </section>
      </main>
    </div>
  );
}
/*<CoreConcepts_ 
         title = {CORE_CONCEPTS[2].title}                    // galing to sa data.js, may array dun.
         description = {CORE_CONCEPTS[2].description}
         image = {CORE_CONCEPTS[2].image}/>
         
 <CoreConcepts_ 
        title = {CORE_CONCEPTS[0].title}
        description = {CORE_CONCEPTS[0].description}
        image = {CORE_CONCEPTS[0].image}
        />
        //////// long method, pinalitan ng spread operator
        */


export default App;
