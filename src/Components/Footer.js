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
          <a href="mailto:nvarabioff@gmail.com" className="hovBlu">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="https://drive.google.com/uc?id=1qoX2PZJ946Uigf0G3SRMd74te_iJajso" className="hovBlu">
            <FontAwesomeIcon icon={faFileAlt} />
          </a>
        </Container>
      </footer>
    );
  }
}

export default Footer;
