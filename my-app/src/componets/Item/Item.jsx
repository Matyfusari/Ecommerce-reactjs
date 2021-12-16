import {Link} from 'react-router-dom'
import './Item.css'

function Item({prod}) {
    return (
        <div 
                                                  key={prod.id}
                                                  className='cold-xs-4 cart grid-columns'
                                                > 
                                                    <div className= "card">
                                                        <div className='card-header'>
                                                           {`${prod.name} - ${prod.categoria}`}
                                                        </div>
                                                        <div className="card-body">
                                                           <img src={prod.foto} alt='' className='w-30 fotoCart' />
                                                           {prod.price}                                                            
                                                        </div>
                                                        <div className='card-footer'>
                                                        <Link to={`/detalle/${prod.id}`}>
                                                            <button className="btn btn-outline-primary btn-block">
                                                            detalle del producto
                                                            </button>
                                                        </Link>  
                                                        </div>
                                                    </div>
                                                </div>  
    )
}

export default Item
