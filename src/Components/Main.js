import React from 'react';
import {
  Jumbotron,
  Container,
  Col,
  Row
  } from 'reactstrap';
import Tabs from './Tabs';
import Information from '../information.json';
import Website from '../Assets/Website_3.jpg';

class Main extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <Container>
            <Row>
              <Col xs="3">
                <img src={Website} className="first" alt="Nicholas Varabioff"/>
              </Col>
              <Col>
                  <h1 className="display-3">{Information.title}</h1>
                  <p className="txt-size">{Information.summary}</p>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
        <Container>
          <Tabs id="scrl"/>
        </Container>
        <hr/>
      </div>
    );
  }
}

export default Main;
