import Carrusel from "../Carousel/Carousel";
import "./Home.css";
const Home = ({ greetings }) => {
  return (
    <main>
      <h2 className="Titulo">{greetings}</h2>
      <Carrusel />
      <p className="enunciado">
        
        <small >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur tempore obcaecati esse temporibus repudiandae dicta aperiam laudantium et officia quam aliquid, numquam fuga corrupti accusamus tempora iusto recusandae itaque magnam?</small>
      </p>
    </main>
  );
};

export default Home;
