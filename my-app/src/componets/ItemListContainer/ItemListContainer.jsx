import {useState, useEffect} from 'react'
import {getFetch} from "../../helpers/getFetch"
import ItemList from '../ItemList/ItemList'

function ItemListContainer({greeting}) {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect (() => {
       getFetch
       .then(resp => setProductos(resp))
       .catch(err => console.log(err))
       .finally(() =>setLoading(false))
    },[])
    
    return (
        <div>
                    { greeting }
                    { loading ?
                     <h2>cargando...</h2>
                     :
                     <ItemList productos={productos} />
                    }
    
        </div>
    )
                             

}
export default ItemListContainer
