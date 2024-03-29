import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Type from "./type";
import AOS from "aos"
import Home2 from "./about"
import "aos/dist/aos.css"
import Resume from "./resume"
import Projects from "./projects";
let current_time= new Date();
let year = current_time.getFullYear();
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle id="particles-js" />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello there, <span className="wave" role="img" aria-labelledby="wave"></span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name">   Anirudh Sathiya Narayanan</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 50 }}>
              
            </Col>
          </Row>
         
        </Container>
       </Container>
      <Container fluid className="home-section2"><div
    data-aos="fade-up"
    data-aos-offset="100"
    data-aos-delay="50"
    data-aos-duration="200"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-anchor-placement="top-center"
  >
    <Container  fluid className="home-section" id="about"><Row><Home2 /></Row></Container></div></Container>
  <div
    data-aos="fade-up"
    data-aos-offset="100"
    data-aos-delay="50"
    data-aos-duration="200"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-anchor-placement="top-center"
  >
  <Resume /></div>
  <Projects />

  <h5 style={{margin:"auto", color: "#ffffff", padding:"50px"}}>Anirudh Sathiya© {year}</h5>
  </section>
   
  );
}

export default Home;