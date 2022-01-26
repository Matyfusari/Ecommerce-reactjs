import Carrusel from "../Carousel/Carousel";
import "./Home.css";
const Home = ({ greetings }) => {
  return (
    <main>
      <h2 className="Titulo">{greetings}</h2>
      <Carrusel />
      <p className="enunciado">
        
        <small >En Hamdade Style By Marita, Todos los productos son artesanales, los de regaleria son hechos con totora, y la indumentaria para mascotas son realizados con lana acrilica</small>
        
      </p>
    </main>
  );
};

export default Home;
