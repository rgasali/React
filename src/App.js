
import Gallery from "./componentes/Gallery/Gallery";
import Form from "./componentes/Form/Form";
import FeedbackForm from "./componentes/FeedbackForm/FeedbackForm";
import FeedbackForm2 from "./componentes/FeedbackForm2/FeedbackForm2";


function App() {
  return (
   <div>
    <h1>Mis ejercicios</h1>
    <h2>Ejercicio 1</h2>
      <Gallery/>
    <h2>Ejercicio 2</h2>  
      <Form/>
    <h2>Ejercicio 3</h2>
      <FeedbackForm/>
    <h2>Ejercicio 4</h2>
      <FeedbackForm2/>
   </div>

  );
}

export default App;
