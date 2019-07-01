import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import Information from '../information.json';

// Content in the Projects tab
class Projects extends React.Component {
  render() {
    return (
      <Container>
        {Information.projects.map(function (project, i) {
          return (
            <Row>
              <Col xs="3" className="right">
                <div key={i}>
                  <Row>
                    <a href={project.url} className="title">{project.title}</a>
                  </Row>
                  <Row>
                    <span className="dates">{project.dates}</span>
                  </Row>
                </div>
              </Col>
              <Col className="left">
                <div key={i}>
                  <Row>
                    <p className="txt-size-small">{project.description}</p>
                  </Row>
                </div>
              </Col>
            </Row>
          );
        })}
      </Container>
    );
  }
}

export default Projects;
