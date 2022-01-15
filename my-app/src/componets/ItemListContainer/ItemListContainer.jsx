import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getFetch } from "../../helpers/getFetch"
import ItemList from '../ItemList/ItemList'

import { collection, doc, getDoc, getFirestore, getDocs, query, where, limit } from 'firebase/firestore'


function ItemListContainer( {greeting} ) {
    const [productos, setProductos] = useState([])
    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true)


    const [bool, setBool] = useState(true)
    

    const { idCate } = useParams() 
    
    
  
    useEffect(() => {
        const db = getFirestore()
        const queryCollection = query(
            collection(db, 'items')
            
        )
        getDocs(queryCollection)
        .then(resp => setProductos( resp.docs.map(prod => ({ id: prod.id, ...prod.data() }) ) ) )
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
        

    }, []) 
    
    
   

    
    
   
    console.log(productos)
    
    return (
        <div>
            { greeting }

            

            { loading ? 
                <h2>Cargando...</h2> 
                :  
               <ItemList productos={productos} />
            }
            
        </div>
    )
}

export default ItemListContainer
