import 'bootstrap/dist/css/bootstrap.min.css';
import "./Work.css";
import React from 'react'
import projImg1 from "../assets/meter1.jpeg";
import projImg2 from "../assets/meter2.jpg";
import projImg3 from "../assets/meter3.jpeg";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./Pcards";


const Work = () => {
  const work = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];
  return (
    <section className="project" id = "project">
      <Container>
        <Row>
          <Col>
            <h2>Recent Projects</h2>
            <p>Sample Texting is common these days</p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey = "first">
                      <Row>
                        {
                          work.map((work, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...work}
                              />
                            );
                        })}
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">Good Scene</Tab.Pane>
                    <Tab.Pane eventKey="third">Good Scene</Tab.Pane>
                  </Tab.Content>
                  /</Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Work
