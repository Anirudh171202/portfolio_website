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
{/*             
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C++, Javascript and Python. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Deep Learning and Natural Launguage Processing.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js ans Next.js</b>
              </i>
            </p>  */}
            <p className="home-about-body" >
            Hello! I'm an incoming freshman at the <b className="purple">University of Massachusetts, Amherst</b> majoring in Computer Science.
            <br />
            <br />

            I believe that <b className="purple">nature is the best inspiration for any good design</b>, even in the field of computer science. That is why I have always been interested in topics like <b className="purple">genetic algorithms and neural networks</b>, which mimic nature's way of optimizing things ‒ evolution.
            <br />
            <br />
             I’m also keen on innovation in the field of <b className="purple">accessible education</b>. Aside from technology, I’m a huge sports fan, a stock market enthusiast and a keyboard player.

            </p>
          </Col>
        </Row>
        <Row>
          
            {/* <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p> */}
            {/* <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/s.o.u.m.y.a_j.i.t/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  
                </a>
              </li>
            </ul> */}
          
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;