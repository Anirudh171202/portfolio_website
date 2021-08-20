import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
             <h1 style={{ fontSize: "2.2em" }}>
             About Myself
            </h1> 

            <p className="home-about-body" >
            Hello! I'm an incoming freshman at the <b className="purple">University of Massachusetts, Amherst</b> majoring in Computer Science.
            <br />
            <br />

            I believe that <b className="purple">nature is the best inspiration for any good design</b>, even in the field of computer science. That is why I have always been interested in topics like <b className="purple">genetic algorithms and neural networks</b>, which mimic nature's way of optimizing things ‒ evolution.
            <br />
            <br />
             I’m also keen on innovation in the field of <b className="purple">accessible education</b>. Aside from technology, I’m a sports fan, a stock market enthusiast and a keyboard player.

            </p>
          </Col>
        </Row>
        <Row>
          
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;