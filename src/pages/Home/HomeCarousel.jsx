import React from "react";

import { Carousel } from "react-bootstrap";

let imagesArray = [
  {
    index: 1,
    src: require("../../assets/images/carousel/2.jpg"),
    title: "Title",
    subtitle: "Subtitle"
  },
  {
    index: 2,
    src: require("../../assets/images/carousel/4.jpg"),
    title: "Title",
    subtitle: "Subtitle"
  },
  {
    index: 3,
    src: require("../../assets/images/carousel/5.jpg"),
    title: "Title",
    subtitle: "Subtitle"
  }
];
const HomeCarousel = () => {
  return (
    <div>
      <Carousel>
        {imagesArray.map(image => (
          <Carousel.Item key={image.index}>
            <img
              style={{
                objectFit: "cover",
                width: "100%",
                height: "435px",
                maxWidth: "100%"
              }}
              src={image.src}
              alt={image.title}
            />
            <Carousel.Caption
              style={{
                background: "rgba(8, 13, 55, 0.35)",
                left: "0",
                width: "47%",
                paddingLeft: "2%",
                textAlign: "left",
                bottom: "1%",
                paddingTop: "10px",
                paddingBottom: "10px",
                paddingRight: "4%",
                textAlign: "Justify",
                minHeight: "59px"
              }}
            >
              <h3>{image.title}</h3>
              <p>{image.subtitle}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
