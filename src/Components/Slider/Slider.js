import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Col, Row } from "react-bootstrap";
import axios from "axios";
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpeg";
import img3 from "../img/img3.webp";
import img4 from "../img/img4.jpg";
import img5 from "../img/img5.jpg";
import img6 from "../img/img6.jpg";

export const Slider = () => {
  const [api, setApi] = useState([]);

  useEffect(() => {
    FetchData();
  }, []);

  const FetchData = () => {
    axios
      .get("https://api.pexels.com/v1/curated?page=2&per_page=40")
      .then((res) => {
        setApi(res.data.photos);
      })
      .catch((err) => console.log(err));
  };

  const dataSlider = [
    {
      id: 0,
      title: "",
      url: img6,
      alt: "google-Img",
    },
    {
      id: 1,
      title: "",
      url: img1,
      alt: "google-Img",
    },
    {
      id: 2,
      title: "",
      url: img2,
      alt: "google-Img",
    },
    {
      id: 3,
      title: "",
      url: img3,
      alt: "google-Img",
    },
    {
      id: 4,
      title: "",
      url: img4,
      alt: "google-Img",
    },
    {
      id: 5,
      title: "",
      url: img5,
      alt: "google-Img",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx" style={{marginTop:"-30px"}}>
              <h2>Save Images Use</h2>
    
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                {dataSlider.map((item) => (
                  <div key={item.id} className="item">
                    <div>
                      <img src={item.url} height="200px" width="300px" />
                    </div>
                    <h5>{item.alt}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            {" "}
            <div>
                <h1>Pexels api images Use</h1>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                {api.map((item) => (
                  <div key={item.id} className="item">
                    <div>
                      <img src={item.src.medium} alt={item.alt} height="200px" width="300px" />
                    </div>
                    <h5>{item.photographer}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
