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

function CoreConcepts_(props){
  return(
    // 'props'- tulay to papunta sa function na 'App', then props.image.. props.etc", para makuha yung value nung function sa apps
<li>
   <img src = {props.image} alt = {props.title}/> 
   <h3>{props.title}</h3>
   <p> {props.description}</p>
  

</li>
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
        <CoreConcepts_ 
        title = {CORE_CONCEPTS[0].title}
        description = {CORE_CONCEPTS[0].description}
        image = {CORE_CONCEPTS[0].image}
        />
        <CoreConcepts_ 
         title = {CORE_CONCEPTS[1].title}
         description = {CORE_CONCEPTS[1].description}
         image = {CORE_CONCEPTS[1].image}

        />
        <CoreConcepts_ 
         title = {CORE_CONCEPTS[2].title}
         description = {CORE_CONCEPTS[2].description}
         image = {CORE_CONCEPTS[2].image}/> 
      
        </ul>
        </section>
      </main>
    </div>
  );
}
/*<CoreConcepts_ 
         title = {CORE_CONCEPTS[2].title}                    // galing to sa data.js, may array dun.
         description = {CORE_CONCEPTS[2].description}
         image = {CORE_CONCEPTS[2].image}/> */


export default App;
