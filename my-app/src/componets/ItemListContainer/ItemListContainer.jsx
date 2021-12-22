import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {getFetch} from "../../helpers/getFetch"
import ItemList from '../ItemList/ItemList'

function ItemListContainer({greeting}) {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { idCate } = useParams() 
    
    
    useEffect(() => {
        if (idCate) {
            getFetch
            .then(resp => setProductos(resp.filter(prod => prod.categoria === idCate))) 
            .catch(err => console.log(err))
            .finally(()=>setLoading(false))            
        } else {
            getFetch
            .then(resp => setProductos(resp)) 
            .catch(err => console.log(err))
            .finally(()=>setLoading(false))               
        }
    }, [idCate])  
    
    console.log(idCate)
    
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
