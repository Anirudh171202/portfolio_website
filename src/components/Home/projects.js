import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import "../../style.css"
function Projects () {
    return(
<Container>
<Flippy
    flipOnHover={false} // default false
    flipOnClick={true} // default false
    flipDirection="horizontal" // horizontal or vertical
    style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
  >
    <FrontSide className="flippy-front" style={{backgroundColor:"#000000"}}>
      RICK
    </FrontSide>
    <BackSide className="flippy-back">
      ROCKS
    </BackSide>
  </Flippy>
</Container>
    );
}
export default Projects;