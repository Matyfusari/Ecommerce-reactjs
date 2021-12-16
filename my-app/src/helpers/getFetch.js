const productos = [
    { id: 1,foto:  "./img/cumpl.jpeg" ,categoria: 'Tortas', name: "Tortas" },
    { id: 2,foto:  "./img/cumpl.jpeg" ,categoria: 'Tortas', name: "Tortas", },
    { id: 3,foto:  "./img/cumpl.jpeg" ,categoria: 'Tartas', name: "Tartas", },
    { id: 4,foto:  "./img/cumpl.jpeg" ,categoria: 'Tartas', name: "Tartas", },
    
   
];//

export const getFetch = new Promise((resolve)=>{
     // acciones pueden ser o no asincronícas setTime
     setTimeout(()=>{
         resolve(productos)
     }, 3000)
}) // instanciar un objeto 

