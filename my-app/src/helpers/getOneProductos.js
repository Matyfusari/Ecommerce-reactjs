const oneProductos = [
    { id: 1,foto:  "./img/cumpl.jpeg" ,categoria: 'Oreo', name: "Tortas" },
];
  
  const getOneProductos = new Promise((resolve) => {
    setTimeout(() => {
      resolve(oneProductos);
    }, 3000);
  });
  
  export default getOneProductos;