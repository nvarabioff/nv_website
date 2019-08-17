import React from 'react';
import { Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons';

// Header bar, including name, image and icons
class Footer extends React.Component {
  render () {
    return (
      <footer>
        <Container>
          <a href="https://ca.linkedin.com/in/nvarabioff" className="hovBlu">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/nvarabioff" className="hovBlu">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="mailto:nmvarabi@uwaterloo.ca" className="hovBlu">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="https://drive.google.com/uc?id=1TguivckW-bYxp2rUKZVGcCc8Z76KA_PW" className="hovBlu">
            <FontAwesomeIcon icon={faFileAlt} />
          </a>
        </Container>
      </footer>
    );
  }
}

export default Footer;
