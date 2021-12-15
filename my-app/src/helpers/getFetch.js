const productos = [
    { id: 1,foto:  "./img/cumpl.jpeg" ,categoria: 'Oreo', name: "Tortas" },
    { id: 2,foto:  "./img/cumpl.jpeg" ,categoria: 'Chocotorta', name: "Tortas", },
    { id: 3,foto:  "./img/cumpl.jpeg" ,categoria: 'Tarta de Frutilla', name: "Tartas", },
    { id: 4,foto: "./img/cumpl.jpeg" ,categoria: 'Chipa', name: "Panes", },
   
];//

export const getFetch = new Promise((resolve)=>{
     // acciones pueden ser o no asincronícas setTime
     setTimeout(()=>{
         resolve(productos)
     }, 2000)
}) // instanciar un objeto 

