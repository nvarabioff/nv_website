import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Container
  } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import Logo from '../Assets/logo_transparent.png';

// Header bar, including name, image and icons
class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <Container>
            <img src={Logo} className="profile-pic" alt="Nicholas Varabioff"/>
            <NavbarBrand>Nicholas Varabioff</NavbarBrand>
            <NavbarToggler onClick={this.toggle}/>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="https://ca.linkedin.com/in/nvarabioff" className="hovBlu">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/nvarabioff" className="hovBlu">
                    <FontAwesomeIcon icon={faGithub} />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="mailto:nmvarabi@uwaterloo.ca" className="hovBlu">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://drive.google.com/uc?id=1TguivckW-bYxp2rUKZVGcCc8Z76KA_PW" className="hovBlu">
                    <FontAwesomeIcon icon={faFileAlt} />
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Header;
