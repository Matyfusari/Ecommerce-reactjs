// import { useContext } from 'react'
// import { CartContext } from '../../context/CartContext'

import {  addDoc, collection, doc, getFirestore, Timestamp, updateDoc, writeBatch } from "firebase/firestore"
import { useState } from "react"
import { useCartContext } from "../context/CartContext"



function Cart() {
    const [idOrder, setIdOrder] = useState('')
    const [dataForm, setDataForm] = useState({
        name:"", email:"", phone:""
    })
    const {  cartList, borrarCarrito, precioTotal  } = useCartContext()


    const handleChange = (e) => {
        // console.log(e.target.name)
        // console.log(e.target.value)
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }
    console.log(dataForm)
    const generarOrden = (e) =>{
        e.preventDefault()  
        
        
        // Nuevo objeto de orders    
        let orden = {}
        orden.date = Timestamp.fromDate(new Date())
        //firebase.firestore.Timestamp.fromDate(new Date()); 

        orden.buyer = dataForm
        orden.total = precioTotal();

        orden.items = cartList.map(cartItem => {
            const id = cartItem.id;
            const nombre = cartItem.name;
            const precio = cartItem.price * cartItem.cantidad;
            
            return {id, nombre, precio}   
        })

        // Generar la orden 
        const db = getFirestore()
        const ordenColeccion = collection(db, 'orders')
        addDoc(ordenColeccion, orden)
        .then(resp => setIdOrder(resp.id))
        .catch(err => console.log(err))
        .finally(()=> {
            borrarCarrito()
            setDataForm({
                name:"", email:"", phone:""
            })
        })

        // modificar update
         const docModifcar = doc(db, 'items', 'DGupCsKFgil34rMRlzc7')
         const docModifcar1 = doc(db, 'items', 'I1UAX4AsxZVvHU1QkDCk')
         const docModifcar2 = doc(db, 'items', 'JqGCf50AzqSjpwuTn9bF')
         const docModifcar3 = doc(db, 'items', 'VLMc6RaE0cKJaCmuIASi')

         updateDoc(docModifcar, {
             stock: 99
         })
         .then(resp => console.log('modificado'))

        // Escritura por lotes
         const batch = writeBatch(db)
         batch.update(docModifcar, {
             stock: 90
         })
         batch.update(docModifcar1, {
             stock: 99
         })
         batch.update(docModifcar2, {
            stock: 99
        })
        batch.update(docModifcar3, {
            stock: 99
        })
         batch.commit()
         console.log(orden)


      


    }

    return (
        <div>
            {idOrder.length !== 0 && idOrder}
            {  cartList.map(prod=> <li>{prod.name}   {prod.cantidad}</li>) }
            <form 
                onSubmit={generarOrden} 
                onChange={handleChange} 
            >
                <input 
                    type='text' 
                    name='name' 
                    placeholder='name' 
                    value={dataForm.name}
                /><br />
                <input 
                    type='text' 
                    name='phone'
                    placeholder='tel' 
                    value={dataForm.phone}
                /><br/>
                <input 
                    type='email' 
                    name='email'
                    placeholder='email' 
                    value={dataForm.email}
                /><br/>
                <button>Generar Orden</button>
            </form>
            <button onClick={borrarCarrito} >Vaciar Carrito</button>

        </div>
    )
}

export default Cart