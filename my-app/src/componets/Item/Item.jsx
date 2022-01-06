import {Link} from 'react-router-dom'

function Item({prod}) {
    console.log('item')
    return (
        <div 
            key={prod.id}
            className='col-md-4'
        >                        
            <div className="card w-100 mt-5" >
                <div className="card-header">
                    {`${prod.name} - ${prod.categoria}`}
                </div>
                <div className="card-body">
                    <img src={prod.imagenID} alt='' className='w-50' />
                    {prod.price}                                                            
                </div>
                <div className="card-footer">  
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
