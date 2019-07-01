import React from 'react';
import {
  Container,
  Row,
  Col,
  Media
} from 'reactstrap';
import Information from '../information.json';
import classnames from 'classnames';

// Content in the Education tab
class Experience extends React.Component {
  render() {
    return (
      <Container>
        {Information.education.map(function (edu, i) {
          return (
            <Row>
              <Col xs="3" className="left">
                <div key={i}>
                  <Media left top href={edu.url}>
                    <Media object src={edu.logo} alt={edu.name} className="logo"/>
                  </Media>
                </div>
              </Col>
              <Col className="left">
                <div key={i}>
                  <Media body>
                    <Media heading>
                      <Row>
                        <a href={edu.url} className="title">{edu.name}</a>
                      </Row>
                      <Row>
                        <i><span className="txt-size">{edu.title}</span></i>
                      </Row>
                      <Row>
                        <span className="dates">{edu.duration}</span>
                      </Row>
                      <Row>
                        <span className="txt-size">{edu.class1_title}</span>
                      </Row>
                      <Row>
                        <span className={classnames("txt-size-small", "indent")}>{edu.class1_description}</span>
                      </Row>
                      <Row>
                        <span className="txt-size">{edu.class2_title}</span>
                      </Row>
                      <Row>
                        <span className={classnames("txt-size-small", "indent")}>{edu.class2_description}</span>
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
