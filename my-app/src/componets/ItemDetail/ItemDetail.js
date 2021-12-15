const ItemDetail = ({ item }) => {
    console.log("El item", item);
    return (
      <div className="">
        
        <h3>{item.name}</h3>
        <p>{item.categoria}</p>
        
      </div>
    );
  };
  export default ItemDetail;
  