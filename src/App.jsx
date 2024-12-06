import reactImage from "./assets/react-core-concepts.png";
import compImg from "./assets/components.png";


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
   <h1> {props.sulat}</h1>

</li>
// "alt"- means pag hindi nag load yung image na props.image, etong "alt yung lalabas".

  );
}

function App() {
  return (
    <div>
      <Header />
     
      <main>
        <section id="core-concepts"></section>
        <h2>Core concepts!</h2>
        <ul>
        <CoreConcepts_ //magpapasa ng value sa ginawa natin dun sa function na CoreConcepts sa taas.yung word na ('props') maglilink sa knila, any character will do.
        title = "Components" /*this "title" called props*/
        description = "The core UI building block" /*this "description" called props*/  
        image = {compImg} // "compImg"-dun sa taas nkalink sa import comImpg // kelangan yung word na "image" dito parehas din dun sa taas sa"CoreConcepts"
        />
        <CoreConcepts_ description= "hello"  /> 
      
        <CoreConcepts_ title="tester"/>


        </ul>
      </main>
    </div>
  );
}

export default App;
