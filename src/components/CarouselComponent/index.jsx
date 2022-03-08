import { Carousel } from "react-bootstrap";
import a1 from "./images/a1.jpg";
import a2 from "./images/a2.jpg";
import a3 from "./images/a3.jpg";
import a4 from "./images/a4.jpg";
import "./styles.css";
const CarouselComponent = () => {

    return (
    <div className="carousel">
      <Carousel>
      <Carousel.Item interval={2000} className="carousel">
        <img
          className="d-block w-100"
          src={ a1 }
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000} className="carousel">
        <img
          className="d-block w-100"
          src= { a2 }
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000} className="carousel">
        <img
          className="d-block w-100"
          src={ a3 }
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={2000} className="carousel">
        <img
          className="d-block w-100"
          src={ a4 }
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
        );
      
      

    
    

}


export default CarouselComponent ;






