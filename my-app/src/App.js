import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ItemListContainer from './componets/ItemListContainer/ItemListContainer';
import NavBar from './componets/NavBar/NavBar';
import ItemCount from './componets/ItemCount/ItemCount';


function App() {
  const inicial =1
  const max =10
  return (
    <center>
      <NavBar/>
      hola soy app de e-commerce
      <ItemListContainer greeting = "hola soy ItemListContainer que vengo de app" />
      <ItemCount inicial={inicial} max={max}/>
    </center>
  );
}

export default App;
