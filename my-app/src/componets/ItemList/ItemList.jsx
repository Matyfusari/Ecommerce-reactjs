import { memo } from "react";
import Item from "../Item/Item";
import "./ItemListt.css";
const ItemList = memo(({ productos }) => {
  return (
    <section className="itemList">
      { productos.map((prod) => <Item prod= {prod} />)  }
    </section>
  );
});

export default ItemList;
