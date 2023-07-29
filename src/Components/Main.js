import React from 'react';
import {
  Jumbotron,
  Container,
  Col,
  Row
  } from 'reactstrap';
import Information from '../information.json';
import Website from '../Assets/Website_4.jpg';

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
            <Row>
              <iframe src="https://lichess.org/training/frame?theme=brown&bg=dark" 
                style={{width: "400px", height: "444px", display: "block", margin: "0 auto"}} allowtransparency="true" frameborder="0"></iframe>
            </Row>
          </Container>
        </Jumbotron>
        
        <hr/>
      </div>
    );
  }
}

export default Main;
