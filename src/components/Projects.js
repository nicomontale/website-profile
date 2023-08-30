import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.jpg";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.jpg";
import projImg4 from "../assets/img/project-img4.jpg";
import projImg5 from "../assets/img/project-img5.jpg";
import projImg6 from "../assets/img/project-img6.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Food UI",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "LGBT Sport Magazine",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Music UI",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Journey UI",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "Skate Shop Site",
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      title: "Skate Spot Research",
      description: "Design & Development",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Below all my personal projects. You can find all its related code on my <a href="https://github.com/nicomontale" style={{color: "white"}}>github</a></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Personal Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Connect to Dev</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Connect to Dev</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Below all my personal projects. You can find all its related code on my <a href="https://github.com/nicomontale" style={{color: "white"}}>github</a></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Feel free to reach out to me if you're interested in obtaining pricing information for web development services. I'd be more than happy to provide you with a detailed quote tailored to your specific needs and project requirements. Whether you're looking for a simple website, an e-commerce platform</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
