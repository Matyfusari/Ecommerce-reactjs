const productos = [
    { id: 1,foto:  "./img/cumpl.jpeg",categoria: 'Tortas', name: "Oreo", price: 37, stock:'4'},
    { id: 2,foto:  "./img/cumpl.jpeg" ,categoria: 'Tortas', name: "Chocotorta", price: 27 },
    { id: 3,foto: "./img/cumpl.jpeg" ,categoria: 'Tartas', name: "Frutilla", price: 40 },
    { id: 4,foto: "./img/cumpl.jpeg" ,categoria: 'Tartas', name: "Chocolate", price: 55 },
   
];//

export const getFetch = new Promise((resolve)=>{
     // acciones pueden ser o no asincronícas setTime
     setTimeout(()=>{
         resolve(productos)
     }, 3000)
}) // instanciar un objeto 

