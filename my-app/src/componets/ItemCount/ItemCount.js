import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./ItemCount.css";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);
  
  const addQuantity = () => {
    setQuantity((prev) => prev + 1);
    if (quantity === stock) {
      setQuantity(quantity);
    }
  };
  const removeQuantity = () => {
    setQuantity((prev) => prev - 1);
    if (quantity === 1) {
      setQuantity(1);
    }
  };

  return (
    <>
      {stock <= 0 ? (
        <button className="outOfStock" disabled>
          No disponible
        </button>
      ) : (
        <>
          <div>
            <button className="remove" onClick={removeQuantity}>
              <FaMinus className="faQuantity" />
            </button>
            <input className="quantity" value={quantity} readOnly={true}/>
            <button className="add" onClick={addQuantity}>
            <FaPlus className="faQuantity" />
            </button>
          </div>
          <button
            type="submit"
            className="addCart"
            onClick={() => onAdd(parseInt(quantity))}
          >
            Agregar al carrito
          </button>
        </>
      )}
    </>
  );
};

export default ItemCount;