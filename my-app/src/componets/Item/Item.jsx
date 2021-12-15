import React from 'react'

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
                                                           <img src={prod.foto} alt='' className='w-30' />
                                                           {prod.price}                                                            
                                                        </div>
                                                        <div className='card-footer'>
                                                             <button className='"btn btn-outline-primary btn-block'>
                                                                detalle del producto
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>  
    )
}

export default Item
