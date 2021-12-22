import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({ prod }) => {
    const [goCart, setGoCart] = useState(false);

    const onAdd = (cantidad) => {
        console.log(cantidad);
        setGoCart(true);
    };

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                margin: '20px',
            }}
        >
            <div>
                <img
                    width={400}
                    src={prod.foto}
                    alt="img"
                    style={{ margin: '10px' }}
                />
            </div>
            <div style={{ width: '50%' }}>
                <h2>{prod.name}</h2>
                <h3>$ {prod.price}</h3>
                <h4 style={{ width: '70%' }}>{prod.description}</h4>
                <Link to="/">Voler al home</Link>
            </div>
            {!goCart ? (
                <ItemCount stock={prod.stock} onAdd={onAdd} />
            ) : (
                <Link to="/cart">Ir al carrito</Link>
            )}
        </div>
    );
};

export default ItemDetail;
