import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Resumecontent from "./resumeContent";
import pdf from "../../Assets/AnirudhResume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
 
  return (
    <Container fluid className="resume-section">
      <Container>
        <h1>My Portfolio</h1>
        <Row className="resume">
          <Col md={6} className="resume-centre">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Founder, ScienceAR"
              date="July 2018 - July 2020"
              content={[
                "Founded ScienceAR - an augmented reality application that transforms diagrams in science textbooks to interactive 3D structures, enriching visual learning among students.",
                "Award winning project, won multiple awards including grand prize in APR Codefest.",
                "ScienceAR is currently available on Google Play Store for anyone to download and use for free."
              ]}
            />
            <Resumecontent
              title="Team Lead, SnapSearch for Cisco"
              date="July 2019 - Jan 2020"
              content={[
                "Team lead of six members in developing SnapSearch in collaboration with Cisco",
                "Built a scalable website service that utilizes cloud technologies to find the best matching solutions to high school problems online and delivered it in a neat front-end.",
                "Oversaw operations on a daily basis and designed a web scraper using scrapy framework in python"
              ]}
            />
            {/* <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Web Developer [Pantheon-2019 Technical Fest of BIT Mesra]"
              content={[
                "Worked on creating the frontend-end of the website using Bootstrap, Javascript.",
              ]}
            />
            <Resumecontent
              title="Web Developer [Bitotsav-2020 Technical Fest of BIT Mesra]"
              content={[
                "Operated on developing the frontend end of the website using Bootstrap, Javascript and backend APIs using Node.js",
              ]}
            /> */}
          </Col>
          {/* <Col md={6} className="resume-right">
            <h3 className="resume-title">Projects</h3>
           
            <Resumecontent
              title="12TH BOARD [ODM Public School,Odisha]"
              date="2015 - 2017"
              content={["Precentage: 88%"]}
            />
            <Resumecontent
              title="10TH BOARD [ST Mary's School,Odisha] "
              date="2005 - 2015"
              content={["Precentage: 86%"]}
            />
            <h3 className="resume-title">Ranks and Achivements</h3>
            
          </Col> */}
        </Row>
        <Row style={{ justifyContent: "center", position: "relative", maxWidth: 150, margin: "auto" }}>
          <Button variant="primary" href={pdf} target="_blank">
          <AiOutlineDownload />&nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
