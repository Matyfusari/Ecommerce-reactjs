import {  BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './componets/NavBar/NavBar';
import ItemListContainer from './componets/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componets/ItemDetailContainer/ItemDetailContainer';
import Cart from './componets/Cart/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import CartContextProvider, { CartContext } from './componets/context/CartContext';


function App() {
  
  return (
   <CartContextProvider>
      <BrowserRouter>
              <center>
                <NavBar/>
                <Routes>
                      <Route 
                        exact
                        path="/" 
                        element={ <ItemListContainer greeting='hola soy ItemListContainer que vengo de app' />} 
                     />
                     <Route 
                        exact
                        path="/categoria/:idCate" 
                        element={ <ItemListContainer greeting='hola soy ItemListContainer que vengo de app' />} 
                     />
                     <Route 
                        exact
                        path="/detalle/:id" 
                        element={ <ItemDetailContainer />} 
                     /> 
                     <Route 
                        exact
                        path="/cart" 
                        element={ <Cart />} 
                     /> 
                  </Routes>
                 
              </center>
      </BrowserRouter>
   </CartContextProvider> 
  );
}

export default App;
