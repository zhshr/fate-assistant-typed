import * as React from 'react';
//import './MainFrame.css';
import EireiFrame from './Eirei/EireiFrame';
import * as EireiData from './Eirei/EireiData/EireiData';
import Map from './Map/Map';
import LatencyDisplay from './SynchronizeUtils/LatencyDisplay';

import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class MainFrame extends React.Component {

  state: {
    testEirei: EireiData.BaseData;
  };

  props: {
    value: string;
    onChange: (value: string) => void;
    master: boolean;
  };

  navBar() {
    return (
      <Navbar fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Fate Assistant</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">Link</NavItem>
          <NavItem eventKey={2} href="#">Link</NavItem>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.4}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>
    );
  }

  render() {
    return (
      <div id="MainFrame">
        {this.navBar()}
        {this.props.master ? 'Master App' : 'Slave App'}
        
        <Map master={this.props.master}/>
        <EireiFrame />
        <LatencyDisplay />
      </div>
    );
  }
}

export default MainFrame;
