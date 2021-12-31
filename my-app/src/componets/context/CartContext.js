import { createContext, useState, useContext } from 'react'


const CartContext = createContext([]) 

export const useCartContext = () => useContext(CartContext)  


function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([])

    // function agregarAlCarrito(item) {
    //     setCartList( [...cartList, item] )    
    // }



    function agregarAlCarrito(item) {       

        const index = cartList.findIndex(i => i.id === item.id)//pos    -1
  
          if (index > -1) {
            const oldQy = cartList[index].cantidad
  
            cartList.splice(index, 1)

            setCartList([...cartList, { ...item, cantidad: item.cantidad + oldQy}])

          } else {
            setCartList([...cartList, item])
          }
      }




    function borrarCarrito() {
        setCartList([])
    }
    

    return (
        <CartContext.Provider value={{
            cartList,
            agregarAlCarrito,
            borrarCarrito
        }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider
