import React from 'react';
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import classnames from 'classnames';
import About from './About';
import Projects from './Projects';
import Experience from './Experience';
import Education from './Education';

// Overview of all tabs
class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.toggleTab = this.toggleTab.bind(this);
    this.state = {
      activeTab: '1',
    };
  }

  toggleTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' }, "tabName")}
              onClick={() => {
                this.toggleTab('1');
              }}
            >
              About Me
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' }, "tabName")}
              onClick={() => {
                this.toggleTab('2');
              }}
            >
              Projects
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' }, "tabName")}
              onClick={() => {
                this.toggleTab('3');
              }}
            >
              Experience
            </NavLink>
          </NavItem>
          {/*<NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' }, "tabName")}
              onClick={() => {
                this.toggleTab('4');
              }}
            >
              Education
            </NavLink>
            </NavItem>*/}
        </Nav>
        <hr/>
        <TabContent className="tcontent" activeTab={this.state.activeTab}>
          <TabPane tabId="1" className="content">
            {/*<Fade in={this.state.fadeIn1} tag="h5" className="mt-3">*/}
              <About />
            {/*</Fade>*/}
          </TabPane>
          <TabPane tabId="2" className="content">
            {/*<Fade in={this.state.fadeIn2} tag="h5" className="mt-3">*/}
              <Projects />
            {/*</Fade>*/}
          </TabPane>
          <TabPane tabId="3" className="content">
            {/*<Fade in={this.state.fadeIn3} tag="h5" className="mt-3">*/}
              <Experience />
            {/*</Fade>*/}
          </TabPane>
          <TabPane tabId="4" className="content">
            {/*<Fade in={this.state.fadeIn4} tag="h5" className="mt-3">*/}
              <Education />
            {/*</Fade>*/}
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

export default Tabs;
