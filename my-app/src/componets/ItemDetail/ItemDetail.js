import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useCartContext } from "../context/CartContext";
import {toast} from 'react-toastify';
import "./ItemDetail.css"
const ItemDetail = ({ prod, onAdd }) => {
  const [goCart, setGoCart] = useState(false);

  const { addToCart } = useCartContext();

  onAdd = (quantity) => {
     addToCart({ ...prod, quantity: quantity });
     setGoCart(true);
    
  };

  return (
    <div className="itemDetail" key={prod.id}>
      <h2 className="nameDetailProduct">{prod.name}</h2>
      <img
        src={prod.imagenID}
        alt="Imagen detalle de producto"
        className="imgDetailProduct"
      />
      <p className="priceDetailProduct">Precio: ${prod.price}</p>
      <p className="stock">Stock: {prod.stock}</p>
      <p className="descriptionDetailProduct">{prod.description}</p>
      {goCart === false ? (
        <ItemCount stock={prod.stock} initial={1} onAdd={onAdd} />
      ) : (
        <Link className="goCart" to="/Cart">
          Ir al carrito
        </Link>
      )}
    </div>
  );
};

export default ItemDetail;

