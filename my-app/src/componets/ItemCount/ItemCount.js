import React, {useState} from 'react'

 const ItemCount = ({max, inicial}) => {
const [value,setValue] = useState(inicial)

const handlerSuma = (valor) => {
    value < max ? setValue(prev => prev + valor) : alert("compra maxima");
}
const handlerResta = (valor) => {
    value > inicial ? setValue(estadoPrevio => estadoPrevio - valor) : alert("compra minima");
}
function Alerta() {
    alert ("ecelente, agregaste a tu carrito");
}

return (
    <div>
        <h1>{value}</h1>
        <button onClick={() => handlerSuma(1)}>+</button>
        <button onClick={() => handlerResta(1)}>-</button>
        <button onClick={Alerta}>Agregar al carrito</button>
    </div>
)


}
export default ItemCount
