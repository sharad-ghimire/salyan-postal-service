import React from "react";
import { Card, Button, Col, Row, Media } from "react-bootstrap";
import { MdPhone, MdEmail } from "react-icons/md";
import { FaFax, FaPhoneVolume } from "react-icons/fa";
import { IoMdGlobe } from "react-icons/io";

import { ContactDiv } from "./Contact.styled";
import ContactForm from "./ContactForm";
import { ReactComponent as Fb } from "./assets/facebook.svg";
import { ReactComponent as Tweet } from "./assets/twitter.svg";
import { ReactComponent as Toll } from "./assets/toll.svg";
import EachPageHeading from "../../components/Common/EachPageHeading";

const ContactUs = () => {
  return (
    <ContactDiv>
      <EachPageHeading title="Contact Us" />
      <Row>
        <Col xs={12} md={6} lg={6}>
          <Card className="contact-card">
            <Card.Body>
              <Card.Title className="title">
                NEPAL GOVERNMENT POSTAL SERVICES DEPARTMENT
              </Card.Title>
              <Card.Text>Dillibazar, Kathmandu, Nepal</Card.Text>
              <Card.Text>
                <div className="details">
                  <MdPhone size="18px" />
                  <span>
                    Phone: +977-1-4410224, 01-4410569, 01-4411353, 01-4421283,
                    01-4421286
                  </span>
                </div>
                <div className="details">
                  <FaFax size="18px" />
                  <span>Fax: +977-1-4414688, 01-4438134</span>
                </div>
                <div className="details">
                  <MdEmail size="18px" />
                  <span>Email : info@postalservice.gov.np</span>
                </div>
                <div className="details">
                  <IoMdGlobe size="18px" />
                  <span>Website : www.postalservice.gov.np </span>
                </div>
                <div className="details">
                  <FaPhoneVolume size="18px" />
                  <span>Notice Board :1618014414688 </span>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="social-wrapper">
          <div className="social">
            <Media className="social-media">
              <Fb width={50} height={50} className="mr-3" />
              <Media.Body>
                <div>Facebook</div>
                <span>@nplpost</span>
              </Media.Body>
            </Media>
            <Media className="social-media">
              <Tweet width={50} height={50} className="mr-3" />
              <Media.Body>
                <div>Twitter</div>
                <span>@Nepal_Post</span>
              </Media.Body>
            </Media>
            <Media className="social-media">
              <Toll width={50} height={50} className="mr-3" />
              <Media.Body>
                <div>Toll Free</div>
                <span>1618014414688</span>
              </Media.Body>
            </Media>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="map-card">
            <Card.Title>Map HERE</Card.Title>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <ContactForm />
        </Col>
      </Row>
    </ContactDiv>
  );
};

export default ContactUs;
