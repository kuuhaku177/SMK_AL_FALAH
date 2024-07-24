import Carousel from 'react-bootstrap/Carousel';
import smk from './../assets/Smk.jpg';
import smk1 from './../assets/Smk1.jpg';
import smk2 from './../assets/Smk2.jpg';

const Hero = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src={smk}
          alt="first slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src={smk1}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="d-block w-100"
          src={smk2}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Hero;