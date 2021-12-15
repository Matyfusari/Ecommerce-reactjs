import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'


function NavBar() {
    return (
        
        <div>
  <nav className="navbar navbar-expand-lg navbar-light bg-dark-color">
  <img src= "./img/Handmade style1.png" alt="logo" className='logo' />
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only"></span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Productos</a>
      </li>
    </ul>
    <CartWidget/>
    
</div>
</nav>

        </div>
    )
}

export default NavBar
