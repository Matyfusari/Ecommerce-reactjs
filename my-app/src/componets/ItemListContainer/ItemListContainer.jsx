import { useState, useEffect, memo } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import "./ItemList.css";

const ItemListContainer = memo(({ nameCategory, greetings }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const { idcategoria } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryProductos = idcategoria ?
    query(collection(db, "items"),where("categoria", "==", idcategoria))
    :
    query(collection(db, "items"));
      getDocs(queryProductos).then((resp) => {
        setProductos(
          resp.docs.map((prod) => ({ id: prod.id, ...prod.data() }))
        );
        setCategories(
          resp.docs
            .map((item) => item.data().categoria)
            .reduce(
              (acc, item) => (acc.includes(item) ? acc : [...acc, item]),
              []
            )
        );
        setLoading(false);
      });
  }, [idcategoria]);

  const categoria = categories.filter((categoria) => categoria === idcategoria);

  return (
    <main>
      <h2>{greetings || categoria}</h2>
      {loading  ? 
                <h2>Cargando...</h2> 
                :  
        <ItemList productos={productos} />
      }
    </main>
  );
});

export default ItemListContainer;
