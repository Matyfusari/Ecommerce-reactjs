import { Link } from "react-router-dom";
import { memo } from "react";
import "./Item.css";
const Item = memo(({ prod }) => {
  return (
    <div className="cardProduct" key={prod.id}>
       <Link to={`/detalle/${prod.id}`} className="linkItem">
      <img
        src={prod.imagenID}
        alt="Imagen de producto"
        className="imgCardProduct"
      />
      <h3 className="nameProduct">{prod.name}</h3>
      <h3 className="priceProduct">$ {prod.price}</h3>
        <button className="btnVerMas">Detalles</button>
      </Link>
      <hr />
    </div>
  );
});

export default Item;