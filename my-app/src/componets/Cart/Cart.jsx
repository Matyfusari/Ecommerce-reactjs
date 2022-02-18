
import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { FaPlus, FaMinus } from "react-icons/fa";
import "../ItemCount/ItemCount.css";
import "./Cart.css";


const Cart = () => {

  const { cartList, emptyCart, deleteFromCart, totalCart, addQuantity, removeQuantity } = useCartContext();
  
  return (
    <main className="Main">
      <h2 className="titCart">Carrito de Compras</h2>
      {cartList < 1 ? (
        <>
          <p className="titCart">No hay productos en el carrito</p>
          <Link to="/all" className="backStore">
            Volver a la tienda
          </Link>
        </>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {cartList.map((product) => (
                <tr key={product.id}>
                  <td>
                    <img src={product.imagenID} alt={product.name} />
                    <h6>{product.name}</h6>
                  </td>
                  <td>${product.price}</td>
                  <td>
                  <button className="remove" onClick={()=>{removeQuantity(product)}}>
                    <FaMinus className="faQuantity" />
                  </button>
                    <input type="number"className="quantity" readOnly value={product.quantity}/>
                  <button className="add" onClick={()=>{addQuantity(product)}}>
                    <FaPlus className="faQuantity" />
                  </button>
                    </td>
                  <td>${product.quantity * product.price}</td>
                  <td>
                    <button
                      onClick={() => deleteFromCart(product)}
                      className="btn-delete"
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={emptyCart} className="btn-empty">
            Vaciar carrito
          </button>
          <p className="price">
            Total: ${totalCart()}
          </p>
          <Link to="/checkout" className="checkout">
            Terminar compra
          </Link>
        </>
      )}
    </main>
  );
};

export default Cart;

