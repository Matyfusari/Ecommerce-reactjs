const productos = [
    { id: 1,foto:  "https://i.ibb.co/fdn5g2C/mama.jpg", Xategoria: 'Tortas', name: "Oreo", price: 37, stock:'4'},
    { id: 2,foto:  "https://i.ibb.co/yh45dh1/Whats-App-Image-2022-01-17-at-21-49-51.jpg" ,categoria: 'Tortas', name: "Chocotorta", price: 27 },
    { id: 3,foto: "https://i.ibb.co/yh45dh1/Whats-App-Image-2022-01-17-at-21-49-51.jpg" ,categoria: 'Tartas', name: "Frutilla", price: 40 },
    { id: 4,foto: "https://i.ibb.co/yh45dh1/Whats-App-Image-2022-01-17-at-21-49-51.jpg" ,categoria: 'Tartas', name: "Chocolate", price: 55 },
    { id: 5,foto: "https://i.ibb.co/yh45dh1/Whats-App-Image-2022-01-17-at-21-49-51.jpg" ,categoria: 'Tartas', name: "Verdura", price: 100 },
   
];//

export const getFetch = new Promise((resolve)=>{
     // acciones pueden ser o no asincronícas setTime
     setTimeout(()=>{
         resolve(productos)
     }, 3000)
}) // instanciar un objeto 