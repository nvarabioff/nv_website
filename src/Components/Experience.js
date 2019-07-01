import React from 'react';
import {
  Container,
  Row,
  Col,
  Media
} from 'reactstrap';
import Information from '../information.json';

// Content in the Experience tab
class Experience extends React.Component {
  render() {
    return (
      <Container>
        {Information.experiences.map(function (experience, i) {
          return (
            <Row>
              <Col xs="3" className="left">
                <div key={i}>
                  <Media left top href={experience.url}>
                    <Media object src={experience.logo} alt={experience.companyName} className="logo"/>
                  </Media>
                </div>
              </Col>
              <Col className="left">
                <div key={i}>
                  <Media body>
                    <Media heading>
                      <Row>
                        <a href={experience.url} className="title">{experience.companyName}</a>
                      </Row>
                      <Row>
                        <span className="dates">{experience.dates}</span>
                      </Row>
                      <Row>
                        <span className="txt-size-small">{experience.description}</span>
                      </Row>
                    </Media>
                  </Media>
                </div>
              </Col>
            </Row>
          );
        })}
      </Container>
    );
  }
}

export default Experience;
