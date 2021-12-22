import {Link, NavLink} from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

function NavBar() {
    return (
        
      <Navbar collapseOnSelect expand="lg" bg="dark-color" className='color'>
      <Container>
      <img src="./img/Handmade style1.png" alt="" className='logo'/>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className=" nav">
          <NavLink className='NavBar' activeClassName='' to="/">Home</NavLink>
          <Link className='NavBar' to="/categoria/Tortas">Tortas</Link>
          <NavLink className="NavBar" activeClassName='' to="/categoria/Tartas">Tartas</NavLink>   
        <CartWidget/>
        </Nav>
      </Navbar.Collapse>
      <Link className='Carrito' to="/Cart" >Carrito</Link>   
      </Container>
    </Navbar>
    )
}

export default NavBar