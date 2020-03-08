import React from "react";
import { HomeStyled } from "./Home.styled";
import HomeCarousel from "./HomeCarousel";

import Highlight from "./Highlight";
import { Card, Row, Col, CardDeck, Button } from "react-bootstrap";
import NewsListBox from "../../components/NewsListBox/NewsListBox";
import EachPageHeading from "../../components/Common/EachPageHeading";
import { ReactComponent as Calender } from "./assets/calender.svg";
import { FormattedMessage } from "react-intl";

const Home = props => {
  let services = [
    {
      id: 1,
      name: "Mail Service",
      description:
        "GENERAL (TRADITIONAL) SERVICE Applicable from August 18, 2015 (2072 Bhadra 01)  आन्तरिक हुलाक महसुल दर सि.नं. विवरण…",
      link: "/services/mail-service",
      headerImg: require("../../assets/images/services/mail-services.jpg")
    },
    {
      id: 2,
      name: "Postal Savings Bank",
      description:
        "Post Box is a facility provided for the reliable, secured and expeditious collection of postal…",
      link: "/services/savings-bank",
      headerImg: require("../../assets/images/services/postal-saving-bank.jpg")
    },
    {
      id: 3,
      name: "Parcel Services",
      description:
        "Parcel All kinds of items can be sent as a parcel except items, which are…",
      link: "/services/parcel-service",
      headerImg: require("../../assets/images/services/parsal-services.jpg")
    }
  ];
  const navigate = to => props.history.push(to);

  return (
    <HomeStyled>
      <div className="carousel-wrapper">
        <HomeCarousel />
        <Highlight />
        <div className="services">
          <CardDeck>
            {services.map(service => (
              <Card>
                <Card.Img variant="top" src={service.headerImg} />
                <Card.Body>
                  <Card.Title>{service.name}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button
                    className="primary"
                    onClick={() => navigate(service.link)}
                  >
                    Read More
                  </Button>
                </Card.Footer>
              </Card>
            ))}
            <Card className="director-card">
              <img
                className="director-img"
                src={require("../../assets/images/services/general-director.jpg")}
              />
              <div className="director-desc">
                <h5>Krishna Murari Neupane </h5>
                <p>Director General </p>
              </div>
            </Card>
          </CardDeck>

          <CardDeck className="news">
            <Card>
              <NewsListBox title={`Notices & News`} />
              <NewsListBox pill={true} pillText={`News`} />
              <NewsListBox pill={true} pillText={`News`} />
              <NewsListBox pill={true} pillText={`News`} />
              <div className="readmore">
                <Button
                  className="primary"
                  onClick={() => navigate("/media/news")}
                >
                  View All
                </Button>
              </div>
            </Card>
            <Card>
              <NewsListBox
                pill={true}
                pillText={`Tender Notice`}
                title={`Tender Notice`}
              />
              <NewsListBox pill={true} pillText={`Tender Notice`} />
              <NewsListBox pill={true} pillText={`Tender Notice`} />
              <NewsListBox pill={true} pillText={`Tender Notice`} />
              <div className="readmore">
                <Button
                  className="primary "
                  onClick={() => navigate("/media/tender")}
                >
                  View All
                </Button>
              </div>
            </Card>
            <Card>
              <NewsListBox
                pill={true}
                pillText={`Circular`}
                title={`Circular`}
              />
              <NewsListBox pill={true} pillText={`Circular`} />
              <NewsListBox pill={true} pillText={`Circular`} />
              <NewsListBox pill={true} pillText={`Circular`} />
              <div className="readmore">
                <Button
                  className="primary"
                  onClick={() => navigate("/media/circular")}
                >
                  View All
                </Button>
              </div>
            </Card>

            <Card className="director-card">
              <img
                className="director-img"
                src={require("../../assets/images/services/maiya.jpg")}
              />
              <div className="director-desc">
                <small> गुनासो सुन्ने अधिकारी</small>
                <h5>मैयादेवी धमला</h5>
                <p>निर्देशक/सूचना अधिकारी</p>
                <p>+९७७-०१-४४११३५३ </p>
                <p>rti@postalservice.gov.np</p>
              </div>
            </Card>
          </CardDeck>
        </div>
        <CardDeck className="home-last-section">
          <Card onClick={() => navigate("/gallery")}>
            <EachPageHeading
              title={
                <FormattedMessage
                  id="home.ourgallery"
                  defaultMessage="Our Gallery"
                />
              }
            />
            <Card.Img></Card.Img>
            <Card.Body>Photos from World Post Day 2019</Card.Body>
          </Card>

          <Card onClick={() => navigate("/publications")}>
            <EachPageHeading
              title={
                <FormattedMessage
                  id="home.ourpublication"
                  defaultMessage="Our Publications"
                />
              }
            />
            <Card.Img></Card.Img>
            <Card.Body>Our Publication</Card.Body>
          </Card>

          <Card className="empty"></Card>
          <Card>
            <EachPageHeading
              title={
                <FormattedMessage
                  id="home.ourfacebook"
                  defaultMessage="Our Facebook"
                />
              }
            />
            <Card.Img></Card.Img>
            <Card.Body>Facebook HERE</Card.Body>
          </Card>
        </CardDeck>
        <Row className="e-attendance">
          <Col></Col>
          <Col xs={12} lg={3} md={3} className="content">
            <Calender
              style={{
                width: "47px",
                height: "auto",
                marginLeft: "7px",
                marginRight: "7px"
              }}
            />
            <span>
              विद्युतीय हाजिरी <br /> eAttendance
            </span>
          </Col>
        </Row>
      </div>
    </HomeStyled>
  );
};

export default Home;
