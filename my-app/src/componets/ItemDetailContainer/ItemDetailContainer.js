import { useState, useEffect } from "react";
import getOneProductos from "../../helpers/getOneProductos";
import ItemDetail from "../ItemDetail/ItemDetail";


const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  console.log("item", item);

  useEffect(() => {
    getOneProductos.then((res) => setItem(res)).catch((err) => console.log(err));
  });

  return (
    <div>
      
      <ItemDetail item={item}/>
    </div>
  );
};
export default ItemDetailContainer;
