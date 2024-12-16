import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark" controls={true} interval={3000}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-vector/special-discount-background_23-2147820058.jpg?t=st=1734186919~exp=1734190519~hmac=b806d23ac61e2f4d84f72c432d69911eb91b6cc11c29b23e4c24aff9f0ea8b23&w=740"
          alt="Special discount promotion"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-vector/black-friday-background_23-2147947294.jpg?t=st=1734186961~exp=1734190561~hmac=ad3449baba1ba61946724c4f3a5377c06c366a451bcd2576125472e23ba6bddc&w=740"
          alt="Black Friday sale"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-vector/opening-soon-background-flat-style_23-2148248445.jpg?ga=GA1.1.2133182942.1731137627&semt=ais_hybrid"
          alt="Opening soon announcement"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;
