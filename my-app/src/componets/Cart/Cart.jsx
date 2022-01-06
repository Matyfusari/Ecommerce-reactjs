import { useCartContext } from "../context/CartContext"



function Cart() {

    const {  cartList, borrarCarrito  } = useCartContext()

    return (
        <div>
            {  cartList.map(prod=> <li>{prod.name}   {prod.cantidad}</li>) }
            <button onClick={borrarCarrito} >Vaciar Carrito</button>
        </div>
    )
}

export default Cart
