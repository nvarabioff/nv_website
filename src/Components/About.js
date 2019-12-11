import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import Information from '../information.json';
import Slides from './Slides';

// Content in the "About" tab
class About extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col className="left">
            <p className="txt-size-small">{Information.about1}</p>
            <p className="txt-size-small">{Information.about2}</p>
            {/* <p className="txt-size-small">{Information.about3}</p> */}
          </Col>
          <Col xs="5">
            <Slides />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default About;
