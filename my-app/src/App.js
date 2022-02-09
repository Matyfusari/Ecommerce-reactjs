import {  BrowserRouter, Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from './componets/header/Header';
import Home from './componets/Home/Home';
import ItemListContainer from './componets/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componets/ItemDetailContainer/ItemDetailContainer';
import Cart from './componets/Cart/Cart';
import CartContextProvider, { CartContext } from './componets/context/CartContext';
import Checkout from './componets/Checkout/Checkout';
import Footer from './componets/Footer/Footer';


function App() {
  
  return (
   <CartContextProvider>
      <BrowserRouter>
              <div className='App'>
               <Header/>
            <Routes>
                      <Route 
                        
                        path="/" 
                        element={ <Home greetings="Bienvenidos A Hamdade Style By Marita" />} 
                     />
                     <Route
                        path="/all"
                        element={
                      <ItemListContainer greetings='Nuestros Productos' className="titprod" />}
                     />
                     <Route 
                        exact
                        path="/categoria/:idcategoria" 
                        element={ <ItemListContainer greeting='' />} 
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
                      <Route 
                        exact
                        path="/checkout" 
                        element={<Checkout/>}/>
                  
                  </Routes>
                  <Footer/>  
               </div>
              <ToastContainer/>
      </BrowserRouter>
   </CartContextProvider> 
  );
}

export default App;


