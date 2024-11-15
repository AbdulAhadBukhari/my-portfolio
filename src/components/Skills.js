import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from '../assets/meter1.jpeg';
import meter2 from '../assets/meter2.jpg';
import meter3 from '../assets/meter3.jpeg';
import meter4 from '../assets/meter4.jpeg';
import '../components/Skills.css';
import vid from "../assets/video.mp4";


const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
}
    return(
        <section className = "skill" id = "skills">
            <Container>
                <Row>
                    <Col>
                        <div className = "skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>
                                I have experience working in the following
                            </p>
                            <Carousel responsive={responsive} infinite = {true} className="skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="Web Development Skill"/>
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="App Development Skill"/>
                                    <h5>App Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Web Designing Skill"/>
                                    <h5>Web Designing</h5>
                                </div>
                                <div className="item">
                                    <img src={meter4} alt="UI/UX Designing Skill"/>
                                    <h5>UI/UX Designing</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <video className="video" src={vid} alt="vid" autoPlay loop muted />
        </section>
    )
}

export default Skills
