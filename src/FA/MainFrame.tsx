import * as React from 'react';
// import './MainFrame.css';
// import EireiFrame from './Eirei/EireiFrame';
import * as EireiData from './Eirei/EireiData/EireiData';
import Map from './Map/Map';
import LatencyDisplay from './SynchronizeUtils/LatencyDisplay';
import { AppState } from '../App';
import RenderHelper from './RenderHelper';
import { GridTile } from 'material-ui/GridList';

import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class MainFrame extends React.Component {

  state: {
    testEirei: EireiData.BaseData;
  };

  props: {
    onChange: (value: AppState) => void;
    masterKey: string;
    master: boolean;
  };

  navBar() {
    return (
      <Navbar fixedTop={true}>
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
            <MenuItem divider={true} />
            <MenuItem eventKey={3.4}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
        <Navbar.Collapse>
          
          <Navbar.Text>
            Logged in as: {this.props.master ? 'Keeper' : 'Observer'}. {'\xa0'}
          </Navbar.Text>
          <Navbar.Text pullRight={true}>
            <LatencyDisplay />
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    );
  }

  render() {
    let components = [];
    // components.push(
    //   (RenderHelper.gridTileWrapper(
    //     10, 10, 5, [(<Map master={this.props.master} />)]
    //   )
    // ));
    components.push(
      RenderHelper.gridTileWrapper(
      12, 12, 5, [(<Map master={this.props.master} />)])
    );
    return RenderHelper.defaultGridWrapper(components);       
  }
}

export default MainFrame;
