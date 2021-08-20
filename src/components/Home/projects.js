import React,{useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./cards.css"
import ModalVideo from 'react-modal-video'
import "../../../node_modules/react-modal-video/css/modal-video.css"
import { scryRenderedDOMComponentsWithClass } from "react-dom/cjs/react-dom-test-utils.development";
import {
  AiFillPlayCircle
} from "react-icons/ai";

let card_css = { width: '200px', height: '200px' , backgroundColor:"#f00cff"}
class Projects extends React.Component {

  constructor () {
    super()
    this.state = {
      isOpen1: false,
      isOpen2: false,
      isOpen3: false
    }
    // this.openModal = this.openModal.bind(this)
  }

  openModal () {
    this.setState({isOpen: true})
  }

  render () {
    return(<Container id="projects"><Row><h1 style={{color:"#ffffff", padding:"20px"}}>Projects </h1></Row> <Row><h2 style={{color:"#ffffff"}}>Tap on the cards for more</h2></Row>
    <div className="container-cards">

    <div className="card">
      <div className="face face1">
        <div className="content">
          <span className="stars"></span>
          <h2 className="java">2018-2020</h2>
          <br />
          <br />
          <Container >
			<ModalVideo id="1m" controls= "0" channel='youtube' autoplay isOpen={this.state.isOpen1} videoId="MnWXEufsYcY" onClose={() => this.setState({isOpen1: false})} />
			<button className="btn-primary" id="1b" onClick={() => { this.setState({isOpen1: true})}}>View Demo</button>
      
      </Container>
          <br />
          <br />
          <p className="java" style= {{fontSize:"1.3em"}}>ScienceAR is an augmented reality application that transforms diagrams in science textbooks to interactive 3D structures, enriching visual learning among students. </p> <a href="https://play.google.com/store/apps/details?id=com.ARSoft.ScienceAR">Click to view ScienceAR on Play Store</a>
        </div>
      </div>
      <div className="face face2">
        <h2>ScienceAR</h2>
      </div>
    </div>
  
    <div className="card">
      <div className="face face1">
        <div className="content">
          <span className="stars"></span>
          <h2 className="python">2020-2021</h2>
          <br />
          <br />
          <React.Fragment id="2">
			<ModalVideo id="2" channel='youtube' autoplay isOpen={this.state.isOpen2} videoId="3ITLCgMMEKQ" onClose={() => this.setState({isOpen2: false})} />
			<button className="btn-primary" onClick={() => { this.setState({isOpen2: true})}}>View Demo</button>
		</React.Fragment>
          <br />
          <br />
          <p className="python" style= {{fontSize:"1.3em"}}>Drishti is a web application that converts books from all languages to the Indian convention for Braille made for Indians in rural areas.</p> <br /> <a href="https://drishti.foundation">Click to try out drishti</a>
        </div>
      </div>
      <div className="face face2">
        <h2>Drishti</h2>
      </div>
    </div>
  
    <div className="card">
      <div className="face face1">
        <div className="content">
          <span className="stars"></span>
          <h2 className="cSharp">2021</h2>
          <br />
          <br />
          <React.Fragment id="3">
			<ModalVideo id="3 "channel='youtube' autoplay isOpen={this.state.isOpen3} videoId="rcq8wNMD7Uw" onClose={() => this.setState({isOpen3: false})} />
			<button className="btn-primary" onClick={() => { this.setState({isOpen3: true})}}>View Demo</button>
		</React.Fragment>
          <br />
          <br />
          <p className="cSharp" style= {{fontSize:"1.3em"}}>CoronaBot is a chatbot system for people to obtain easy-to-understand info on COVID-19 in different languages.
</p> <a href="https://youtu.be/a-h3x9_Ecso?t=87">Click to view demo of Corona Bot</a>
        </div>
      </div>
      <div className="face face2">
        <h2>CoronaBot</h2>
      </div>
    </div>
  </div>
  </Container>
    )
    
  }
}


export default Projects;