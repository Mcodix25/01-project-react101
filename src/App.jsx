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
<li>
   <img src ="props.image" alt = {"props.title"}/>
   <h3>{props.title}</h3>
   <p> {props.description}</p>
   <h1> {props.sulat}</h1>

</li>

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
        <CoreConcepts_ title = "Components" description = "The core UI building block"
        image = {compImg}
        />
        <CoreConcepts_ description= "hello"  /> 
      
        <CoreConcepts_ title="tester"/>


        </ul>
      </main>
    </div>
  );
}

export default App;
