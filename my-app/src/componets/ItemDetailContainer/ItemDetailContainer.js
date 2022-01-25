import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import "./ItemDetailContainer.css";
const ItemDetailContainer = () => {
  const [prod, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const queryProduct = doc(db, `items`, id);
    getDoc(queryProduct).then((resp) => {
      setProduct({ id: resp.id, ...resp.data() });
      setLoading(false);
    });
  }, [id]);

  return (
    <section className="sectionDetail">
       {loading ? 
        <h2>Cargando...</h2>
                :
        <ItemDetail prod={prod} />
      }
    </section>
  );
};

export default ItemDetailContainer;


