import { Link } from "react-router-dom";
import "./CheckoutSuccess.css";
const CheckoutSuccess = ({ order, orderId }) => {
  return (
  <>
    <p>GRACIAS POR COMPRAR EN Hamdade Style By Marita</p>
    <p> Su orden <b>{orderId}</b> se ha ingresado exitosamente.</p>
    <h2>Resumen de compra</h2>
    <div className="order-success">
      <div className="order-success-container">
        <div className="buyerData">
          <h3>Datos del comprador</h3>
          <p><b>Nombre y apellido:</b> {order.name} {order.lastname}</p>
          <p><b>Email:</b> {order.email}</p>
          
          <p><b>Telefono:</b> {order.phone}</p>
          
          
          <p><b>Orden ID:</b> {orderId}</p>
          <p><b>Estado:</b> {order.status}</p>
          <p><b>Fecha:</b> {order.date.toLocaleDateString()}</p>
        </div>
      </div>
      <div className="order-items">
        <h3>Items</h3>
        <table className="itemsOrder">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Precio</th>
              <th>Cantidad</th>
            </tr>
          </thead>
          <tbody>
            {order.items.map((item) => (
            <tr key={item.id}>
              <td className="d-flex flex-column align-items-center">
              <h6>{item.title}</h6>
              </td>
              <td>${item.price}</td>
              <td>{item.quantity}</td>
            </tr>
            ))}
          </tbody>
        </table>

      <p><b>Total:</b> ${order.total}</p>
      </div>
    </div>
    <Link to="/all">
    <button className="backStore">Volver a la tienda</button>
    </Link>
  </>
  );
};

export default CheckoutSuccess;
